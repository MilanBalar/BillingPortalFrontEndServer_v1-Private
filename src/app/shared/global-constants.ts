export class GlobalConstants {

    //Messages
    public static genericError: string = 'Something went wrong. Please try again later';
    public static unAuthroized: string = 'You are not authroized person to access this page';

    //Ragex
    public static userNameRagex: string = '[a-zA-Z0-9]*';
    public static nameRagex: string = '[a-zA-Z0-9 ]*';
    public static emailRagex: string = '[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}';
    public static contactNbrRagex: string = '^[e0-9]{10,10}$';

    //Variable
    public static error: string = 'error';

}