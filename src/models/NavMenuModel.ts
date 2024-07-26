import { ISection } from "../interfaces/interfaces";
import { IControllerSectionState as IReduxNavMenu } from "../redux-toolkit/slices/section-controller-slice/initialState";

interface INavMenuModelProperties {
    activeId: string,
    secIdList: string[],
};


export class NavMenuModel {

    // Static Constructor
    static fromRawSections(data :ISection[]):NavMenuModel {

        const { secIdList, activeId } = NavMenuModel.GetMainInfofromISectionArray(data);
        return new NavMenuModel( secIdList, activeId );
    };

    // Static Constructor
    static fromReduxInfo( data: IReduxNavMenu ){

        const { secIdList, activeId } = NavMenuModel.GetMainInfoFromReduaxNavMenu(data);
        return new NavMenuModel( secIdList, activeId );
    };


    // Adapter -> IReduxNavMenu to INavMenuModelProperties
    static GetMainInfoFromReduaxNavMenu( data: IReduxNavMenu ): INavMenuModelProperties {
        return { activeId: data.ActiveId, secIdList: data.sectionIdList };
    }


    // Adapter -> ISection[] to INavMenuModelProperties
    static GetMainInfofromISectionArray(data :ISection[]): INavMenuModelProperties {
       
        let secIdList: string[] = [];
        let activeId = "";

        data.forEach( (element) => {
            secIdList.push( element.id );
            if( element.isActive ) activeId = element.id;
        } );

        return { secIdList, activeId };
    }

    // Properties
    public ActiveSecId : string;
    public sectionsIdList: string[];

    

    constructor( secIdList :string[], activeId :string ) {
        
        this.ActiveSecId = activeId;
        this.sectionsIdList = secIdList;

    };

    public InWhichSectionAmI() :string {
        
        // TODO: To implement

        return "";
    }

    protected existIdSection( id: string ): boolean {

        // TODO: To implement

        return true;

    }

    protected calculateHeightFromSectionId( id:string ): number {
        
        // TODO: To implement

        return 0;
    }

    protected CalculateYTransitionPoints(){

        // TODO: To implement

        return "";
    }

};

