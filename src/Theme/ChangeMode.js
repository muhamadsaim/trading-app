import { useSelector } from "react-redux";
const ModeChange = () => {
    const Mode = useSelector(state => state.mode)
    const lightTheme = {
        ComponentBackgroundColor: 'white',
        whiteText: 'white',
        PageBackgroundColor: '#E2E2E2',
        lightPageBackground: 'rgba(226, 226, 226, 0.4)',
        hoverColor: '#E2E2E2',
        activeColor:'rgba(215, 215, 218, 0.527)',
        userPost: '#B9B9C3',
        sidebarArrow: '#022658',
        headingTextColor: '#022658',
        textColor: '#636578',
        sidebarIcon: 'gray',
        headingColor: '#4C4E64',
        iconColor: '#4C4E64',
        purpleAreaGraph: '#314473',
        greenAreaGraph: '#4EA292',
        redAreaGraph: '#EA3943',
        netPL: '#4EA292',
        profit: '#22894E',
        loss: '#D94848',
        darkGreencolorGraph: '#22894E',
        darkRedcolorGraph: '#D94848',
        blueGraphColor: '#4C91FE',
        tradeLogGreenAreaGraph: '#07E098',
        notficationColor: '#1A1F36',
        dateColor: ' #A5ACB8',
        saveButton: '#EDEDED',
        sliderColor: '#3CD856',
        GrossColor: '#3CD856',
        rattingStarColor: '#FFD600',
        performanceButtonsBackground: '#EDF2F6',
        borderColor: 'rgba(101,120,99,0.1)',
        positiveBar: '#3366CC',
        nagativeBar: '#F57C7E',
        newsHeading: '#05004E',
        linkColor: '#3366CC',
        staticGroupOne: '#5072C0',
        staticGroupTwo: '#FF9600',
        badgeBackColor: '#F0F0F0',
        badgeBackColorRGBA: 'rgba(240, 240, 240, 0.5)',
        lightgrey: '#BFBFBF',
        reportDataColor: '#f2e9ef',
        avatarBackground: '#7367F0',
        avatarBackgroundRGBA: 'rgba(115, 103, 240, 0.5)',
        boxShadow: 'rgba(99, 99, 99, 0.3) 0px 2px 8px 0px',
        lightDarkBlue: '#022658',
        eventsColor: 'white',
        eventBorderColor: '#e2e2e2',
        graphGridLinesColor: 'rgba(0, 0, 0, 0.15)',
        graphLabels: '#022658',
        profitloss:'#022658',
        currentDateDiv: 'white',
        dateBorderColor: '#e2e2e2',
        tableHeadColor: '#4C4E64',
        tableBorderColor: '#e2e2e2',
        newsText:'#022658',
        tradeBorderColor: '#e2e2e2',
        bluegrayColor: '#022658',
        performanceBTnDiv: '#EDF2F6',
        performanceComponentColor: 'white',
        selectColor: 'white',
        selectBorderColor: '#e2e2e2',
        selectValueColor: '#636578',
        graphAxis: "black",
        logout:'red'
        
    };
    const darkTheme = {
        graphAxis:'white',
        selectValueColor:'white',
        selectColor:'#3A3E5B',
        selectBorderColor:'#61667F',
        performanceComponentColor:'#3A3E5B',
        tradeBorderColor:'#595D75',
        currentDateDiv: '#666CFF',
        newsText: '#EAEAFF',
        ComponentBackgroundColor: '#30334E',
        graphGridLinesColor: '#26293E',
        tableBorderColor:'#262A3F',
        graphLabels: 'yellow',
        profitloss:'#EAEAFF',
        whiteText: 'white',
        eventsColor: '#26293E',
        eventBorderColor:'rgba(237, 242, 246, 0.1)',
        PageBackgroundColor: '#282A42',
        lightPageBackground: '#282A42',
        tableHeadColor:'#666CFF',
        hoverColor: '#666CFF',
        activeColor: '#666CFF',
        lightDarkBlue: '#666CFF',
        dateBorderColor:'#666CFF',
        userPost: '#B9B9C3',
        sidebarArrow: '#666CFF',
        headingTextColor: '#EAEAFF',
        textColor: '#ffffff',
        sidebarIcon: 'gray',
        headingColor: '#EAEAFF',
        iconColor: '#4C4E64',
        purpleAreaGraph: '#F1DFFF',
        greenAreaGraph: '#EDFFF8',
        redAreaGraph: '#FFF3F4',
        netPL: '#4EA292',
        profit: '#22894E',
        loss: '#D94848',
        darkGreencolorGraph: '#22894E',
        darkRedcolorGraph: '#D94848',
        blueGraphColor: '#4C91FE',
        tradeLogGreenAreaGraph: '#00E096',
        notficationColor: 'white',
        dateColor: ' #A5ACB8',
        saveButton: '#666CFF',
        sliderColor: '#3CD856',
        GrossColor: '#3CD856',
        rattingStarColor: '#FFD600',
        performanceButtonsBackground: '#EDF2F6',
        borderColor: 'rgba(101,120,99,0.1)',
        positiveBar: '#3366CC',
        nagativeBar: '#F57C7E',
        newsHeading: '#05004E',
        linkColor: '#3366CC',
        staticGroupOne: '#5072C0',
        staticGroupTwo: '#FF9600',
        badgeBackColor: '#61667F',
        badgeBackColorRGBA: 'rgba(240, 240, 240, 0.5)',
        lightgrey: '#BFBFBF',
        reportDataColor: '#f2e9ef',
        avatarBackground: '#7367F0',
        avatarBackgroundRGBA: 'rgba(115, 103, 240, 0.5)',
        boxShadow: ' ',
        bluegrayColor: '#EAEAFF',
        performanceBTnDiv: '#3A3E5B',
        logout:'#666CFF'
    };
    return (Mode? darkTheme : lightTheme)
}

export default ModeChange