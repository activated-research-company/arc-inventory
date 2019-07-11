function GetEnclosureBarcodeStrategy() {
    return {
        strategy: "{year}{month}{day}{sequence}",
        year: "19",
        month: "04",
        day: "22",
        sequence: 3
    };
}

function GetPolyarcBarcodeStrategy() {
    return {
        strategy: "{vendorCode}{year}{month}{day}{sequence}",
        vendorCode: "B",
        year: "19",
        month: "04",
        day: "22",
        sequence: 3
    };
}

function GetHeaterCableBarcodeStrategy() {
    return {
        strategy: "{year}{month}{day}{sequence} {type}",
        type:"ARC RTD",
        year: "19",
        month: "04",
        day: "22",
        sequence: 3
    };
}

module.exports = {
    enclosure: GetEnclosureBarcodeStrategy(),
    polyarc: GetPolyarcBarcodeStrategy(),
    heaterCable: GetHeaterCableBarcodeStrategy()
};