class AssesmentService {

    defineProjectType = (linesOfCode) => {
        if (linesOfCode < 50000){
            return "organic";
        }
        else if (linesOfCode > 50000 && linesOfCode < 300000) {
            return "semidetached";
        }
        else {
            return "embedded";
        }
    }

    getProjectDescription = (projectType) => {
        switch (projectType) {
            case "organic":
                return {team:"Small", experience:"Experienced developers needed",
                        enviroment:"Familiar enviroment", innovation: "Minor", deadline:"Not tight"};
            case "semidetached":
                return {team:"Medium", experience:"Mix of newbie and experienced developers",
                        enviroment:"Less familiar enviroment", innovation: "Medium", deadline:"Medium"};
            case "embedded":
                return {team:"Large", experience:"Good experience developers",
                        enviroment:"Unfamiliar enviroment", innovation: "Major", deadline:"Very tight"};
            default:
                break;
        }
    }

    countLinesOfCode(weight, language){
        const weightOnePoint = this.getQuantityOfCodeLinesForOneFP(language);
        return weight * weightOnePoint;
    }

    getQuantityOfCodeLinesForOneFP = (language) => {
        switch (language) {
            case "C":
                return 148;
            case "C++":
                return 53;
            case "C#":
                return 59;
            case "JavaScript":
                return 56;
            case "Assembler":
                return 172;
            case "VisualBasic (v6)":
                return 24;
            default:
                return 0;
        }
    }

    getCocomoAssesment(projectType, KLOC, assessment){
        console.log(projectType, KLOC, assessment);
        const EAF = this.countEffortAdjustmentFactor(this.getDriversValue(assessment));
        const consts = this.setConstant(projectType);
        const effort = consts.a * ((KLOC)**consts.b) * EAF;
        const time = consts.c * (effort**consts.d);
        let people;
        if (time != 0){
            people = effort/time ;
        }
        else{
            people = 0;
        }
        return {effort : effort.toFixed(2), time: time.toFixed(2), people:people.toFixed(2)};
    }

    setConstant(projectType){
        switch (projectType){
            case "organic":
                return {a: 2.4, b: 1.05, c:2.5, d:0.38};
            case "semidetached":
                return {a: 3, b: 1.12, c:2.5, d:0.35};
            case "embedded":
                return {a: 3.6, b: 1.20, c:2.5, d:0.32};
        }
    }

    setKoeffForDrivers(value, [koefVL, koefL, koefN, koefH, koefVH, koefEH]){
        switch (value){
            case "Very low":
                return koefVL;
            case "Low":
                return koefL;
            case "Nominal":
                return koefN;
            case "High":
                return koefH;
            case "Very high":
                return koefVH;
            case "Extra high":
                return koefEH;
        }
    }

    getDriversValue(assessment){
        let drivers = [];
        const entries = Object.entries(assessment);
        console.log("LOOOOG");
        console.log(entries);
        entries.map(([key, value]) => {
            let koef;
            switch (key){
                case "RELY":
                    koef = this.setKoeffForDrivers(value, [0.75, 0.88, 1, 1.15, 1.40, 1]);
                    break;
                case "DATA":
                    koef = this.setKoeffForDrivers(value, [1, 0.94, 1, 1.08, 1.16, 1]);
                    break;
                case "CPLX":
                    koef = this.setKoeffForDrivers(value, [0.7, 0.85, 1, 1.15, 1.30, 1.65]);
                    break;
                case "TIME":
                    koef = this.setKoeffForDrivers(value, [1, 1, 1, 1.11, 1.30, 1.66]);
                    break;
                case "STOR":
                    koef = this.setKoeffForDrivers(value, [1, 1, 1, 1.06, 1.21, 1.56]);
                    break;
                case "VIRT":
                    koef = this.setKoeffForDrivers(value, [1, 0.87, 1, 1.15, 1.30, 1]);
                    break;
                case "TURN":
                    koef = this.setKoeffForDrivers(value, [1, 0.87, 1, 1.07, 1.15, 1]);
                    break;
                case "ACAP":
                    koef = this.setKoeffForDrivers(value, [1.46, 1.19, 1, 0.86, 0.71, 1]);
                    break;
                case "AEXP":
                    koef = this.setKoeffForDrivers(value, [1.29, 1.13, 1, 0.91, 0.82, 1]);
                    break;
                case "PCAP":
                    koef = this.setKoeffForDrivers(value, [1.42, 1.17, 1, 0.86, 0.70, 1]);
                    break;
                case "VEXP":
                    koef = this.setKoeffForDrivers(value, [1.21, 1.10, 1, 0.90, 1, 1]);
                    break;
                case "LEXP":
                    koef = this.setKoeffForDrivers(value, [1.14, 1.07, 1, 0.95, 1, 1]);
                    break;
                case "MODP":
                    koef = this.setKoeffForDrivers(value, [1.24, 1.10, 1, 0.91, 0.82, 1]);
                    break;
                case "TOOL":
                    koef = this.setKoeffForDrivers(value, [1.24, 1.10, 1, 0.91, 0.83, 1]);
                    break;
                case "SCED":
                    koef = this.setKoeffForDrivers(value, [1.23, 1.08, 1, 1.04, 1.10, 1]);
                    break;
            }

            drivers.push(koef);
            console.log(drivers);
        });
        return drivers;
    }

    countEffortAdjustmentFactor = (drivers) => {
        let EAF = 1;
        console.log(drivers);
        drivers.map((koeff) => {
            EAF *= koeff; 
        })
        console.log("KOEFF " + EAF);
        return EAF;
    }

    defineComplexity = (rets, dets) => {
        let complexity = "";
        if (rets == 1){
            complexity = this.checkDets(dets, ["Low", "Low", "Avg"]);
        }
        else if (rets > 1 && rets < 6){
            complexity = this.checkDets(dets, ["Low", "Avg", "High"]);
        }
        else if (rets > 5) {
            complexity = this.checkDets(dets, ["Avg", "High", "High"]);
        }
        return complexity;
    }

    countWeight = (rets, fileType, comlexity) => {
        let coeffs;

        switch (fileType){
            case "EI":
            case "EQ":
                coeffs = [3, 4, 6];
                break;
            case "EO":
                coeffs = [4, 5, 7];
                break;
            case "ILF":
                coeffs = [7, 10, 15];
                break;
            case "ELF":
                coeffs = [5, 7, 6];
                break;
        }

        const coeff = this.getCoeff(comlexity, coeffs);
        return coeff * rets;
    }

    getCoeff = (comlexity, [coef1, coef2, coef3]) => {
        switch (comlexity) {
            case "Low":
                return coef1;
            case "Avg":
                return coef2;
            case "High":
                return coef3;
        }
    }

    checkDets = (dets, [val1, val2, val3]) => {
        if (dets > 0 && dets < 20) {
            return val1;
        }
        else if (dets > 19 && dets < 51) {
            return val2;
        }
        else if (dets > 50) {
            return val3;
        }
    }
}

module.exports = new AssesmentService()