function requestListController($scope,$attrs,requestListSrv){

    var vm = this

    //inFiltered Data
    var rawData;

    //Optional Components
    vm.bPages = false;
    vm.bFilters = false;

    //Sort property  and click event handler
    vm.sortProperty='date'
    vm.sortBy=function(property) {
        vm.sortProperty = property
    }

    //Filters
    vm.locationFilter=""
    vm.categoryFilter=""

    //Pagination
    vm.currentPage = 0;
    vm.pageSize = 20;
    vm.requests = [];

    vm.numberOfPages=function(){
        return Math.ceil(vm.requests.length/vm.pageSize);                
    }

    //Workaround for the ng-repeat requiring an array
    vm.pageArray=function(){
        var n = []; 
        p = vm.numberOfPages()
          for (var i = 0; i < p; i++) { 
            n.push(i) 
          }
          return n;
    }

    //++Navigation buttons 
    vm.moveToPage=function(i,e){
        e.preventDefault();
        vm.currentPage = i;
    }

    vm.nextPage=function(e){
        e.preventDefault()
        if(vm.currentPage<vm.numberOfPages()-1)
            vm.currentPage++;
    }

    vm.previousPage= function(e){
        e.preventDefault()
        if (vm.currentPage > 0)
            vm.currentPage--;
    }
    //--Navigation buttons 

    if( $attrs.show == "latest" ) 
        requestListSrv.getLatest().then(data => {
            vm.requests = data
            $scope.$apply()
        })
    else if( $attrs.show == "all" )
        requestListSrv.getAll().then(data => {
            rawData = data
            vm.bFilters = true;
            vm.applyFilters(rawData)
            if ( vm.numberOfPages() > 1 )
                vm.bPages = true;
            $scope.$apply()
        })
    
    //Apply filters if selected. This methods grants correct pagination
    vm.applyFilters=function(){
        vm.currentPage = 0
        vm.requests = []
        rawData
                .forEach(function (e) {
                    if (vm.categoryFilter=="" || (e.category) == (vm.categoryFilter))
                        vm.requests.push(e)
                })
        vm.requests = vm.requests.filter(e=> e.location.toLowerCase().includes(vm.locationFilter.toLowerCase()) 
        )
    }
}

app.component("requestList",{
    templateUrl:"app/components/request-list-component/request-list.html",
    controller:requestListController,
    controllerAs: "vm",
    bindings:{
        show:'<'
    }
})

//star filter for pagination
app.filter('startFrom', function() {
    return function(input, start) {
        start = +start; //parse to int
        return input.slice(start);
    }
});