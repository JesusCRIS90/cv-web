import { ISection } from "../interfaces/interfaces";
import { IControllerSectionState as IReduxNavMenu } from "../redux-toolkit/slices/section-controller-slice/initialState";

type StringList = string[];

interface INavMenuModelProperties {
    activeId: string,
    secIdList: string[],
};

interface ISectionYpos {
    sectionName: string;
    position: number;
}

const TRANSITION_PERCENTAGE = 0.85;

export class NavMenuModel {

    // Static Constructor
    static fromRawSections(data: ISection[]): NavMenuModel {

        const { secIdList, activeId } = NavMenuModel.GetMainInfofromISectionArray(data);
        return new NavMenuModel(secIdList, activeId);
    };

    // Static Constructor
    static fromReduxInfo(data: IReduxNavMenu) {

        const { secIdList, activeId } = NavMenuModel.GetMainInfoFromReduaxNavMenu(data);
        return new NavMenuModel(secIdList, activeId);
    };


    // Adapter -> IReduxNavMenu to INavMenuModelProperties
    static GetMainInfoFromReduaxNavMenu(data: IReduxNavMenu): INavMenuModelProperties {
        return { activeId: data.ActiveId, secIdList: data.sectionIdList };
    }


    // Adapter -> ISection[] to INavMenuModelProperties
    static GetMainInfofromISectionArray(data: ISection[]): INavMenuModelProperties {

        let secIdList: string[] = [];
        let activeId = "";

        data.forEach((element) => {
            secIdList.push(element.id);
            if (element.isActive) activeId = element.id;
        });

        return { secIdList, activeId };
    }

    // Properties
    public ActiveSecId: string;
    public sectionsIdList: string[];



    constructor(secIdList: string[], activeId: string) {

        this.ActiveSecId = activeId;
        this.sectionsIdList = secIdList;

    };

    // Setters & Getters
    public GetSectionIdList(): StringList {
        return this.sectionsIdList;
    }

    public GetActiveSectionId(): string {
        return this.ActiveSecId;
    }

    // 
    // 
    public UpdateInWhichSectionAmI() {

        const activeId = this.GetCurrentSection(
            this.CalculateYTransitionPoints(), window.scrollY
        );

        // TODO: Some logic here if Current ID = "None";

        this.ActiveSecId = activeId;
    }

    protected GetCurrentSection(
        transPoints: Map<string, ISectionYpos>,
        YScrollPos: number
    ): string {

        const DistanceArray = [];
        let distance = Number.MAX_VALUE;
        let ID = "None";

        // Calculate distance Array from each of the YTransition Point respect to YScroll Pos
        for (const entry of transPoints) {
            DistanceArray.push(TRANSITION_PERCENTAGE * entry[1].position - YScrollPos);
        }

        // Selecting the minimin distance
        for (const element of DistanceArray) {
            if (element < 0) continue;
            if (element < distance) distance = element;
        }

        const posIndex = DistanceArray.findIndex((ele) => ele === distance);

        const secId = transPoints.get(String(posIndex))?.sectionName;

        if (secId === undefined) ID = "None";
        else ID = secId;

        return ID;
    }

    protected CalculateYTransitionPoints(): Map<string, ISectionYpos> {

        let numericId = 0;
        let accumulate = 0;
        const transitionPoints = new Map<string, ISectionYpos>();

        const sectionWidths = this.calculateSectionHeights();

        for (const entry of sectionWidths) {
            accumulate += entry[1];
            transitionPoints.set(String(numericId++), {
                sectionName: entry[0],
                position: accumulate,
            });
        }

        return transitionPoints;
    }

    protected calculateSectionHeights(): Map<string, number> {

        const sectionHeights = new Map<string, number>();

        for (const secId of this.GetSectionIdList()) {
            const height = this.getHeightFromSectionId(secId);
            sectionHeights.set(secId, height);
        }

        return new Map<string, number>;
    }

    protected getHeightFromSectionId(id: string): number {
        const height = document.getElementById(id)?.clientHeight;

        if (height === undefined) return 0;
        return Number(height);
    }


    protected existIdSection(id: string): boolean {

        // TODO: To implement

        return true;

    }

};

