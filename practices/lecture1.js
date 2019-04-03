

const {Observable} = rxjs;
const obs$ =  Observable.create(function (observer){
    observer.next('CS572');
    setTimeout(()=>{observer.complete()}, 3000);
});

const  subcription = obs$.subscribe(
    function (x){console.log(x);},
    function (err){console.error(err);},
    function (){console.info('Done');}
)

