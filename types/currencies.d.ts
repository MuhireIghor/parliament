interface Currencies{
    color:string;
    icon:string;
    title:string;
    description:string;
    buttons:Buttons[]
}

interface Buttons{
            icon?:React.FC;
            content:string|number;
            color:string;
}