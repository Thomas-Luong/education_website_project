(() => {

	angular
		.module ("csci102", [ "ngRoute" ])
		
        .config (($routeProvider) => {
			$routeProvider
                .when ("/",             { templateUrl: "views/home.html", title: "Home" })
                .when ("/about",        { templateUrl: "views/about.html", title: "About" })
                .when ("/athletics",    { templateUrl: "views/athletics.html", title: "Athletics" })
				.when ("/calendar",		{ templateUrl: "views/calendar.html", title: "Calendar" })
                .when ("/contact",      { templateUrl: "views/contact.html", title: "Contact" })
                .when ("/events",       { templateUrl: "views/events.html", title: "Events" })
                .when ("/faq",          { templateUrl: "views/faq.html", title: "FAQ" })
				.when ("/features",     { templateUrl: "views/features.html", title: "Features" })
                .when ("/news",         { templateUrl: "views/news.html", title: "News" })
                .when ("/studentlife",  { templateUrl: "views/studentlife.html", title: "Student Life" })
                .when ("/sitemap",  	{ templateUrl: "views/sitemap.html", title: "Sitemap" });
		})

        .controller ("main", ($scope, $location, $anchorScroll, $route) => {
            $scope.navigate = (path) => {
                $location.path (path);
            };
			
			$scope.scrollTo = (id) => {
				$location.hash (id);
				$anchorScroll ();
			};
			
			$scope.isActive = (id) => {
				return $location.path () == id;
			};
				
			$scope.$on ("$routeChangeSuccess", () => {
				$scope.title = $route.routes [$location.path ()].title;
			});
			
        });

}) ();