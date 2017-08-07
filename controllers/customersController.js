function CustomersController($scope){
    $scope.sortB = 'name';
    $scope.reverse = false;
    
    $scope.customers =  $scope.customers = [
                    {name: 'John', city: 'Chandler', joined: '2000-12-02', orderTotal: 300}, 
                    {name: 'Mary', city: 'Englewood', joined: '2010-10-12', orderTotal: 400}, 
                    {name: 'Huck', city: 'Yuma', joined: '2013-09-09', orderTotal: 500}, 
                    {name: 'Jackie', city: 'Chandler', joined: '2000-12-02', orderTotal: 300}, 
                    {name: 'Monika', city: 'Englewood', joined: '2010-10-12', orderTotal: 200},
                    {name: 'Choah', city: 'Taipei', joined: '1995-08-02', orderTotal: 300}
    ];
    
    $scope.doSort = function(propName){
        $scope.sortBy = $scope.propName;
        $scope.reverse = !$scope.reverse;
    };
                
}