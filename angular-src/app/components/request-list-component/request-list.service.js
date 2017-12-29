app.service('requestListSrv',function(){
    
    this.getLatest = function(){
        return Promise.resolve(mock_data_last)
    }

    this.getAll = function(){
        return Promise.resolve(mock_data_all)
    }

    this.getById=function(id){
        var index = mock_data_all.findIndex(function(r){
            return (r.id==id)
        })
        return Promise.resolve(mock_data_all[index])
    }

})

var mock_data_all
var mock_data_last

$.getJSON('app/components/request-list-component/MOCK_DATA.json',function(data){
    mock_data_all = data
    mock_data_last = data.slice(90)
})
