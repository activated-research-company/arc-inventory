module.exports = {
    ENCLOSURE: {
        id: "enclosure",
        label: "Enclosure",
        barcodeStrategy: {
            strategy: "{year}{month}{day}{sequence}",
            type:"PT100"
        }
    },
    POLYARC: {
        id: "polyarc",
        label: "Polyarc",
        barcodeStrategy: {
            strategy: "{vendorCode}{year}{day}{month}{sequence}",
            vendorCode: "B"
        }
    },
    HEATER_CABLE_ARC_RTD: {
        id: "heaterCableArcRtd",
        label: "Heater Cable (ARC RTD)",
        barcodeStrategy: {
            strategy: "{year}{month}{day}{sequence}{type}",
            type:"ARCRTD"
        }
    },
    HEATER_CABLE_PT100: {
        id: "heaterCablePt100",
        label: "Heater Cable (PT100)",
        barcodeStrategy: {
            strategy: "{year}{month}{day}{sequence}{type}",
            type:"PT100"
        }
    }
}