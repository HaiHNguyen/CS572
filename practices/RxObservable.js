
import {Observable} from '@reactivex/rxjs';
const {Observable} = rxjs;
const {from}=rxjs;

const hello$ =  Observable.create(observer =>{
    setTimeout( ()=>{
            observer.next("Hello");
        }, 1000);
    setTimeout( ()=>
            {observer.next("This");
        }, 1000);
    setTimeout( ()=>{
        observer.next("is");
        }, 1000);
    setTimeout( ()=>{
        observer.next("me");
        observer.complete("GoodBy");
        }, 1000);
     });

hello$.subscribe(value =>{console.log(value)});


