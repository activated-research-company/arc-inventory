module.exports = {
  ENCLOSURE: {
    id: 'enclosure',
    label: 'Enclosure',
    barcodeStrategy: {
      strategy: '{year}{month}{day}{sequence}',
      type: 'PT100',
    },
  },
  POLYARC: {
    id: 'polyarc',
    label: 'Polyarc',
    barcodeStrategy: {
      strategy: '{vendorCode}{year}{day}{month}{sequence}',
      vendorCode: 'B',
    },
  },
  HEATER_CABLE_ARC_RTD: {
    id: 'heaterCableArcRtd',
    label: 'Heater Cable (40V)',
    barcodeStrategy: {
      strategy: '{fullyear}{month}{day}40{sequence}',
      type: 'ARCRTD',
    },
  },
  HEATER_CABLE_PT100: {
    id: 'heaterCablePt100',
    label: 'Heater Cable (120V)',
    barcodeStrategy: {
      strategy: '{fullyear}{month}{day}120{sequence}',
      type: 'PT100',
    },
  },
};
