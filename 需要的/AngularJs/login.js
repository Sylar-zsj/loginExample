var app = angular.module('maApp',[]);
app.controller('loginCtrl',function($scope){
	$scope.users=[
	{
		id:1,
		userName:admin,
		password:admin
	},
	{
		id:2,
		userName:admin,
		password:12345
	}
  ];
  
  $scope.login=function(user){
		angular.forEach(users,function(data){
			if(data.userName==user.userName && data.password==user.password){
				console.log("成功");
			}else{
				alert("登录失败!");
			}
			
		});
	};
});