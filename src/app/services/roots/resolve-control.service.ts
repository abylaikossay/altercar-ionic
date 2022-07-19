import {Injectable} from '@angular/core';
import {
  ActivatedRoute,
  PRIMARY_OUTLET,
  Router,
  RunGuardsAndResolvers
} from '@angular/router';
import {IonRefresher} from '@ionic/angular';
import {RefreshCacheService} from '../caches/refresh-cache.service';

// todo https://habr.com/ru/post/517958/

@Injectable({
  providedIn: 'root'
})
export class ResolveControlService {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private refreshCacheService: RefreshCacheService) {
  }

  /**
   * Принудительный запуск guard-ов текущего url
   */
  forceRunCurrentGuards(ionRefresh: IonRefresher): void {


    // Изменяем стратегию Router.onSameUrlNavigation на чувствительную к навигации на текущий url
    const restoreSameUrl = this.changeSameUrlStrategy(this.router, 'reload');

    // Получаем текущий ActivatedRoute для primary outlet
    const primaryRoute: ActivatedRoute = this.getLastRouteForOutlet(this.route.root, PRIMARY_OUTLET);

    // Изменяем стратегию runGuardsAndResolvers для ActivatedRoute и его предков на чувствительную к навигации на текущий url
    const restoreRunGuards = this.changeRunGuardStrategies(primaryRoute, 'always', ionRefresh);


    // Запуск события навигации
    this.router.navigateByUrl(
      this.router.url
    ).then(() => {
      // Восстановление onSameUrlNavigation
      restoreSameUrl();
      // Восстановление runGuardsAndResolvers
      restoreRunGuards();
    });
  }

  /**
   * Изменение onSameUrlNavigation с сохранением текущего значения
   * @param router - Router, для которого осуществляется замена
   * @param strategy - новая стратегия
   * @return callback для восстановления значения
   */
  private changeSameUrlStrategy(router: Router, strategy: 'reload' | 'ignore'): () => void {
    const onSameUrlNavigation = router.onSameUrlNavigation;
    router.onSameUrlNavigation = strategy;

    return () => {
      router.onSameUrlNavigation = onSameUrlNavigation;
    };
  }

  /**
   * Получение последнего route для outlet-а
   * @param route - Route относительно которого осуществляется поиск
   * @param outlet - имя outlet-а, по которому осуществляется поиск
   * @return Текущий ActivatedRoute для заданного outlet
   */
  private getLastRouteForOutlet(route: ActivatedRoute, outlet: string): ActivatedRoute {
    if (route.children?.length) {
      return this.getLastRouteForOutlet(
        route.children.find(item => item.outlet === outlet),
        outlet
      );
    } else {
      return route;
    }
  }

  /**
   * Изменение runGuardsAndResolvers для ActivatedRoute и его предков, с сохранением текущих значений
   * @param route - ActivatedRoute для которого осуществляется замена
   * @param strategy - новая стратегия
   * @return callback для восстановления значения
   */
  private changeRunGuardStrategies(route: ActivatedRoute, strategy: RunGuardsAndResolvers, ionRefresh: IonRefresher): () => void {
    const routeConfigs = route.pathFromRoot
    .map(item => {
      if (item.routeConfig) {
        const runGuardsAndResolvers = item.routeConfig.runGuardsAndResolvers;
        if (item.routeConfig.resolve) {
          const length = Object.keys(item.routeConfig.resolve).length;
          this.refreshCacheService.setResolverLength(length);
        }
        item.routeConfig.runGuardsAndResolvers = strategy;
        return runGuardsAndResolvers;
      }
      return null;
    });
    const b = route.pathFromRoot.some(value => !!value?.routeConfig?.resolve);
      setTimeout(() => {
        ionRefresh.complete().then();
      }, 100);

    return () => {
      route.pathFromRoot
      .forEach((item, index) => {
        if (item.routeConfig) {
          item.routeConfig.runGuardsAndResolvers = routeConfigs[index];
        }
      });
    };
  }
}
