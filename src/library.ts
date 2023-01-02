type typeOfLiblary='national'|'academic'|'public'|'local';
type Book={
    title:string,
    pages:number;
    isbn:string;
}
type Menbers={
name:string;
//phone:string;
[key:string]:string;

}
type Liblary={
    name: string;
    adress:string;
    numberOfBooks:number;
    type:typeOfLiblary;
    books:Book[];
    genres:string[];
    menbers:Menbers[];
}


const library:Liblary= {
    name: 'Erftstadt Bibliothek',
    adress:'Liblar neben Gymnasium',
    numberOfBooks: 1235,
    type: 'local',
    books:[
        {
            title:'Harry Potter',
            pages:546,
            isbn:'5684-45-7889'
        },{
            title:'Böse Tiere',
            pages:320,
            isbn:'51245-47-896-5'
        }
    ],
    genres: ['finction','history','computers','poetry'],
    menbers:[
        {
            name:'ismail',
            phone:'1234578',
    },
    {
        name:'yusuf',
            phone:'1234578',
            email:'ksvbhfsilvbh@gmail.com'
    },
    ],
}
console.log(library);
