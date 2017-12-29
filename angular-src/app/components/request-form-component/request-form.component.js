function requestFormController($rootScope,$scope){
    var vm = this

    //Cleaning the local storage from previous creations if they existed
    localStorage.removeItem('pendingRequest')

    //Message Variable
    vm.msg

    //Common attributes
    vm.category
    vm.title
    vm.description
    vm.location
    vm.budget = 0
    vm.subcategory

    //Material specific attributes
    vm.mSubCategory
    vm.mDays = 0

    //Service specific attributes
    vm.sSubCategory
    vm.budgetTypology

    vm.selectCategory=function(category){
        vm.category=category
    }

    vm.createRequestBtn=function(){
        m = []

        if (!vm.title)
            m.push("You need a title")
        if (!vm.description)
            m.push("You need a description")
        if (!vm.location)
            m.push("You need a location")

        if( m.length > 0 ){
            vm.msg=m;
            return
        }else{
            vm.msg=null
            //creating the survey
            request={
                title:          vm.title,
                description:    vm.description,
                date:           new Date(),
                category:       (vm.category=='service')?'service':'material',
                subcategory:    (vm.category=='service')?vm.sSubCategory:vm.mSubCategory,
                location:       vm.location,
                budget:         vm.budget
            }
            if (vm.category=='service')
                request.budgetTypology=vm.budgetTypology
            else
                request.days=vm.mDays

            //Stores the request and wait for use to log
            localStorage.setItem('pendingRequest',JSON.stringify(request))

            //checks if user is logged and ask him to if not
            if (!$rootScope.user)
                $("#myModal").modal('toggle')
            else{
                alert("TODO: create service to send the created request")
            }
        }
      }

}
app.component("requestForm",{
    templateUrl:"app/components/request-form-component/request-form.html",
    controller:requestFormController,
    controllerAs:"vm"
})