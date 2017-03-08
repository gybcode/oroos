(function() {
	'use strict';

	angular
		.module('app')
		.config(Config);

	/* @ngInject */
	Config.$inject = ['$urlRouterProvider', '$stateProvider', '$locationProvider', '$mdThemingProvider'];
	function Config($urlRouterProvider, $stateProvider, $locationProvider, $mdThemingProvider) {
		//$locationProvider.html5Mode(true);
		// theming
		$mdThemingProvider.theme('myCustom')
			.primaryPalette('GE-Grey', {
				'hue-1': '900',
				'hue-2': '300',
				'hue-3': '50'
			})
		.accentPalette('GE-Blue', {
			'hue-1': '900',
			'hue-2': '500',
			'hue-3': 'A200'
		});
		    // PALETTs
    $mdThemingProvider.definePalette('GE-Blue', {
      '50': '#c3e1ff',
      '100': '#77baff',
      '200': '#3f9eff',
      '300': '#007af6',
      '400': '#006bd8',
      '500': '#005cb9',
      '600': '#004d9a',
      '700': '#003e7c',
      '800': '#002e5d',
      '900': '#001f3f',
      'A100': '#c3e1ff',
      'A200': '#77baff',
      'A400': '#006bd8',
      'A700': '#003e7c',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': '50 100 200 A100 A200'
    });

    $mdThemingProvider.definePalette('GE-Red', {
      '50': '#ffffff',
      '100': '#f8cccf',
      '200': '#f29aa1',
      '300': '#ea5b66',
      '400': '#e6404c',
      '500': '#e32533',
      '600': '#cf1b28',
      '700': '#b41723',
      '800': '#99141d',
      '900': '#7d1018',
      'A100': '#ffffff',
      'A200': '#f8cccf',
      'A400': '#e6404c',
      'A700': '#b41723',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': '50 100 200 300 A100 A200'
    });

    $mdThemingProvider.definePalette('GE-Green', {
      '50': '#d4ffb7',
      '100': '#a7ff6b',
      '200': '#85ff33',
      '300': '#5fea00',
      '400': '#52cc00',
      '500': '#46ad00',
      '600': '#3a8e00',
      '700': '#2d7000',
      '800': '#215100',
      '900': '#143300',
      'A100': '#d4ffb7',
      'A200': '#a7ff6b',
      'A400': '#52cc00',
      'A700': '#2d7000',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': '50 100 200 300 400 A100 A200 A400'
    });

    $mdThemingProvider.definePalette('GE-Orange', {
      '50': '#ffffff',
      '100': '#fff0de',
      '200': '#ffd6a6',
      '300': '#ffb45e',
      '400': '#ffa640',
      '500': '#ff9821',
      '600': '#ff8a02',
      '700': '#e37a00',
      '800': '#c46900',
      '900': '#a65900',
      'A100': '#ffffff',
      'A200': '#fff0de',
      'A400': '#ffa640',
      'A700': '#e37a00',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': '50 100 200 300 400 500 600 700 A100 A200 A400 A700'
    });

    $mdThemingProvider.definePalette('GE-Yellow', {
      '50': '#ffffff',
      '100': '#ffffff',
      '200': '#fffaca',
      '300': '#fff382',
      '400': '#fff064',
      '500': '#ffed45',
      '600': '#ffea26',
      '700': '#ffe708',
      '800': '#e8d200',
      '900': '#cab600',
      'A100': '#ffffff',
      'A200': '#ffffff',
      'A400': '#fff064',
      'A700': '#ffe708',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': '50 100 200 300 400 500 600 700 800 900 A100 A200 A400 A700'
    });

    $mdThemingProvider.definePalette('GE-Grey', {
      '50': '#dcdcdc',
      '100': '#b5b5b5',
      '200': '#999999',
      '300': '#767676',
      '400': '#666666',
      '500': '#575757',
      '600': '#484848',
      '700': '#383838',
      '800': '#292929',
      '900': '#1a1a1a',
      'A100': '#dcdcdc',
      'A200': '#b5b5b5',
      'A400': '#666666',
      'A700': '#383838',
      'contrastDefaultColor': 'light',
      'contrastDarkColors': '50 100 200 A100 A200'
    });

		$mdThemingProvider.setDefaultTheme('myCustom');
		// routing
		$urlRouterProvider.otherwise('/home');
		$stateProvider.
			state('dashboard', {
				templateUrl: './components/dashboard/dashboard.html',
				controller: 'DashboardController',
				controllerAs: 'vm'
			})
      .state('dashboard.oroos', {
				url:'/questions',
        params: {
          q: null
        },
				templateUrl: './components/oroos/oroos.html',
				controller: 'OroosController',
				controllerAs: 'vm'
			})
			.state('dashboard.home', {
				url:'/home',
				templateUrl: './components/home/home.html',
				controller: 'HomeController',
				controllerAs: 'vm'
			});
	}
})();