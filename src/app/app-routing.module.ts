import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {LocationResolver} from './services/resolvers/location/location.resolver';
import { environment } from '../environments/environment';

const routes: Routes = [
  {
    path: 'main',
    children: [
      {
        path: 'login',
        loadChildren: () => import('./pages/outer/main/login/login.module').then( m => m.LoginPageModule)
      },
      // {
      //   path: '',
      //   redirectTo: '/main/welcome',
      //   pathMatch: 'full'
      // },
      {
        path: 'registration',
        loadChildren: () => import('./pages/outer/main/registration/registration.module').then( m => m.RegistrationPageModule)
      },
      {
        path: 'sms',
        loadChildren: () => import('./pages/outer/main/sms/sms.module').then( m => m.SmsPageModule)
      },
      {
        path: 'password-confirm',
        loadChildren: () => import('./pages/outer/main/password-confirm/password-confirm.module').then( m => m.PasswordConfirmPageModule)
      },
      {
        path: 'welcome',
        loadChildren: () => import('./pages/outer/main/welcome/welcome.module').then( m => m.WelcomePageModule)
      },
      {
        path: 'slider',
        loadChildren: () => import('./pages/outer/main/slider/slider.module').then( m => m.SliderPageModule)
      },
      {
        path: 'location',
        loadChildren: () => import('./pages/outer/main/location/location.module').then( m => m.LocationPageModule),
        resolve: {
          cityList: LocationResolver
        }
      },
    ]
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule),
  },
  {
    path: 'draft',
    loadChildren: () => import('./pages/draft/draft.module').then(m => m.DraftPageModule),
  },
  {
    path: '',
    redirectTo: `${localStorage.getItem('path') ? 'tabs/home-tab' : 'main/welcome'}`,
    pathMatch: 'full'
  },
  {
    path: 'appointment-info',
    loadChildren: () => import('./pages/inner-tab/appointment-info/appointment-info.module').then( m => m.AppointmentInfoPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/outer/chat/chat.module').then(m => m.ChatPageModule)
  },
  {
    path: 'about-app',
    loadChildren: () => import('./pages/outer/profile/about-app/about-app.module').then( m => m.AboutAppPageModule)
  },
  {
    path: 'popular-questions',
    loadChildren: () => import('./pages/outer/profile/popular-questions/popular-questions.module').then( m => m.PopularQuestionsPageModule)
  },
  {
    path: 'edit-profile',
    loadChildren: () => import('./pages/outer/profile/edit-profile/edit-profile.module').then( m => m.EditProfilePageModule)
  },
  {
    path: 'isp-products',
    loadChildren: () => import('./pages/outer/profile/isp-products/isp-products.module').then(m => m.IspServicesPageModule)
  },
  {
    path: 'user-services',
    loadChildren: () => import('./pages/outer/profile/user-services/user-services.module').then(m => m.UserCategoriesPageModule)
  },
  {
    path: 'select-category',
    loadChildren: () => import('./pages/outer/profile/select-category/select-category.module').then(m => m.SelectServicePageModule)
  },
  {
    path: 'edit-product',
    loadChildren: () => import('./pages/outer/profile/edit-product/edit-product.module').then( m => m.EditProductPageModule)
  },
  {
    path: 'author-profile',
    loadChildren: () => import('./pages/outer/profile/author-profile/author-profile.module').then( m => m.AuthorProfilePageModule)
  },
  {
    path: 'chat-view/:id',
    loadChildren: () => import('./pages/outer/chat-view/chat-view.module').then( m => m.ChatViewPageModule)
  },
  // {
  //   path: 'profile',
  //   loadChildren: () => import('./pages/inner-tab/profile/profile/profile.module').then( m => m.ProfilePageModule)
  // },
  // {
  //   path: 'history',
  //   loadChildren: () => import('./pages/inner-tab/history/history/history.module').then( m => m.HistoryPageModule)
  // },
  {
    path: 'isp-subscriptions',
    loadChildren: () => import('./pages/outer/profile/isp-subscriptions/isp-subscriptions.module').then( m => m.IspSubscriptionsPageModule)
  },
  {
    path: 'isp-new-products',
    loadChildren: () => import('./pages/outer/profile/isp-new-products/isp-new-products.module').then( m => m.IspNewProductsPageModule)
  },
  {
    path: 'add-user-car',
    loadChildren: () => import('./pages/outer/profile/add-user-car/add-user-car.module').then( m => m.AddUserCarPageModule)
  },
  {
    path: 'user-cars',
    loadChildren: () => import('./pages/inner-tab/profile/user-cars/user-cars.module').then( m => m.UserCarsPageModule)
  },
  {
    path: 'service-info',
    loadChildren: () => import('./pages/inner-tab/service-history/service-info/service-info.module').then( m => m.ServiceInfoPageModule)
  },  {
    path: 'request-category',
    loadChildren: () => import('./pages/inner-tab/home/request-category/request-category.module').then( m => m.RequestCategoryPageModule)
  },
  {
    path: 'create-request',
    loadChildren: () => import('./pages/inner-tab/home/create-request/create-request.module').then( m => m.CreateRequestPageModule)
  },
  {
    path: 'request-info',
    loadChildren: () => import('./pages/inner-tab/service-history/request-info/request-info.module').then( m => m.RequestInfoPageModule)
  },




  // {
  //   path: 'auto-service-list',
  //   loadChildren: () => import('./pages/inner-tab/home/auto-service-list/auto-service-list.module').then( m => m.AutoServiceListPageModule)
  // },

  // {
  //   path: 'tire-list',
  //   loadChildren: () => import('./pages/inner-tab/home/tire-list/tire-list.module').then( m => m.TireListPageModule)
  // },
  // {
  //   path: 'service-list',
  //   loadChildren: () => import('./pages/inner-tab/home/service-list/service-list.module').then( m => m.ServiceListPageModule)
  // },

  // {
  //   path: 'user-car',
  //   loadChildren: () => import('./pages/inner-tab/home/user-car/user-car.module').then( m => m.UserCarPageModule)
  // },

  // {
  //   path: 'tire',
  //   loadChildren: () => import('./pages/inner-tab/home/tire/tire.module').then( m => m.TirePageModule)
  // },
  // {
  //   path: 'home',
  //   loadChildren: () => import('./pages/inner-tab/home/home/home.module').then( m => m.HomePageModule)
  // },


  // {
  //   path: 'user-cars',
  //   loadChildren: () => import('../../inner-tab/profile/user-cars/user-cars.module').then(m => m.UserCarsPageModule),
  // },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      preloadingStrategy: PreloadAllModules,
      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
