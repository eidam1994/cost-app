module.exports = {
    language: 'Language',
    toolbar: {
        normal: 'Normal',
        custom: 'Custom',
        history: 'history'
    },
    options: {
        process: 'Process',
        company: 'Manufacturer',
        maschine: 'Machine',
        material: 'Material',
        rate: 'Build rate',
        volume: 'Build Volume (cm³)'
    },
    processList: ["Vat photopolymerization", "Material jetting", "Material extrusion",
        "Binder jetting", "Powder bed fusion", "Direct energy deposition", "Direct energy deposition",
        "Sheet lamination"],
    companyList: [
        {
            name: "Vat photopolymerization",
            company: [
                "Asiga(VP)",
                "Lithoz(VP)",
                "Shining(VP)",
                "Union Tech(VP)",
                "3DCeram(VP)",
                "Prodways(VP)",
                "Envisiontec(VP)",
                "Nanoscribe(VP)",
                "DWS(VP)",
                "C MET(VP)",
                "D-MEC(VP)",
                "Carima(VP)",
                "3D Systems(VP)"
            ]
        },
        {
            name: "Material jetting",
            company: [
                "Stratasys(MJ)",
                "Solidscape(MJ)",
                "Nano Dimension(MJ)",
                "Optomec(MJ)",
                "3D Systems(MJ)"
            ]
        },
        {
            name: "Material extrusion",
            company: [
                "BigRep(ME)",
                "Envisiontec(ME)",
                "German RepRap(ME)",
                "Massivit(ME)",
                "Rokit(ME)"
            ]
        },
        {
            name: "Binder jetting",
            company: [
                "Voxeljet(BJ)",
                "Sentrol(BJ)",
                "Microjet Technology(BJ)",
                "ExOne(BJ)",
                "3D Systems(BJ)"
            ]
        },
        {
            name: "Powder bed fusion",
            company: [
                "Bright Laser Technologies(PBF)",
                "EPlus 3D(PBF)",
                "HengTong(PBF)",
                "LongYuan(PBF)",
                "Prodways(PBF)",
                "Concept Laser(PBF)",
                "EOS(PBF)",
                "0R Laser(PBF)",
                "ReaLizer(PBF)",
                "Trumpf(PBF)",
                "Sharebot(PBF)",
                "Sisma(PBF)",
                "Matsuura(PBF)",
                "RICOH(PBF)",
                "Sentrol(PBF)",
                "Arcam(PBF)",
                "Sintratec(PBF)",
                "HP Ink.(PBF)",
                "3D Systems(PBF)"
            ]
        },
        {
            name: "Direct energy deposition",
            company: [
                "Bright Laser Technologies(DED)",
                "LongYuan(DED)",
                "BeAM(DED)",
                "Optomec(DED)"
            ]
        },
        {
            name: "Sheet lamination",
            company: [
                "Envisiontec(SL)",
                "Mcor Technologies(SL)"
            ]
        }
    ],
    maschineList: [
        {
            name: "Asiga(VP)",
            model: [
                {
                    name: "Pico 2",
                    price: "6990",
                    buildRate: "24",
                    ECH: "0.0384",//0.32*power
                    Flaeche: "0.0988",
                    GCH: "0.228"
                },
                {
                    name: "Pico 2 HD",
                    price: "11990",
                    buildRate: "24",
                    ECH: "0.0384",
                    Flaeche: "0.0998",
                    GCH: "0.228"
                },
                {
                    name: "Freeform PRO2",
                    price: "24990",
                    buildRate: "24",
                    ECH: "0.0384",
                    Flaeche: "0.2205",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "Lithoz(VP)",
            model: [
                {
                    name: "CeraFab 7500",
                    price: "240000",
                    buildRate: "32",
                    ECH: "0.48",
                    Flaeche: "0.96",
                    GCH: "0.228"
                },
                {
                    name: "CeraFab 8500",
                    price: "285000",
                    buildRate: "73.6",
                    ECH: "0.48",
                    Flaeche: "0.96",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "Shining(VP)",
            model: [
                {
                    name: "iSLA-350",
                    price: "110000",
                    buildRate: "0",
                    ECH: "0.384",
                    Flaeche: "0.99",
                    GCH: "0.228"
                },
                {
                    name: "iSLA-450 Pro",
                    price: "130000",
                    buildRate: "0",
                    ECH: "0.64",
                    Flaeche: "1.54",
                    GCH: "0.228"
                },
                {
                    name: "iSLA-650 Pro",
                    price: "160000",
                    buildRate: "0",
                    ECH: "0.96",
                    Flaeche: "0.308",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "Union Tech(VP)",
            model: [
                {
                    name: "Pilot250",
                    price: "98000",
                    buildRate: "0",
                    ECH: "0.96",
                    Flaeche: "1.16",
                    GCH: "0.228"
                }, {
                    name: "Pilot450",
                    price: "136000",
                    buildRate: "0",
                    ECH: "0.96",
                    Flaeche: "1.82",
                    GCH: "0.228"
                }, {
                    name: "RSPro600",
                    price: "276000",
                    buildRate: "0",
                    ECH: "0.96",
                    Flaeche: "2.58",
                    GCH: "0.228"
                }, {
                    name: "RSPro800",
                    price: "362000",
                    buildRate: "0",
                    ECH: "0.96",
                    Flaeche: "2.88",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "HengTong(VP)",
            model: [
                {
                    name: "SPS250M",
                    price: "250000",
                    buildRate: "0",
                    ECH: "0.96",
                    Flaeche: "1.54",
                    GCH: "0.228"
                },
                {
                    name: "SPS450",
                    price: "200000",
                    buildRate: "0",
                    ECH: "0.96",
                    Flaeche: "1.54",
                    GCH: "0.228"
                },
                {
                    name: "SPS600",
                    price: "260000",
                    buildRate: "0",
                    ECH: "0.96",
                    Flaeche: "1.54",
                    GCH: "0.228"
                },
                {
                    name: "SPS800",
                    price: "355000",
                    buildRate: "65",
                    ECH: "1.28",
                    Flaeche: "2.47",
                    GCH: "0.228"
                },
                {
                    name: "SPS1200",
                    price: "375000",
                    buildRate: "65",
                    ECH: "1.6",
                    Flaeche: "3.255",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "3DCeram(VP)",
            model: [
                {
                    name: "CeraMaker 900",
                    price: "250000",
                    buildRate: "0",
                    ECH: "0.928",
                    Flaeche: "2.39",
                    GCH: "0.228"
                },
                {
                    name: "CeraMaker 100",
                    price: "250000",
                    buildRate: "0",
                    ECH: "0.928",
                    Flaeche: "1.5",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "Prodways(VP)",
            model: [
                {
                    name: "ProMaker V6000",
                    price: "350000",
                    buildRate: "0",
                    ECH: "0.928",
                    Flaeche: "2.03",
                    GCH: "0.228"
                },
                {
                    name: "ProMaker L5000",
                    price: "200000",
                    buildRate: "0",
                    ECH: "0.928",
                    Flaeche: "2.3",
                    GCH: "0.228"
                },
                {
                    name: "ProMaker L5000 D",
                    price: "210000",
                    buildRate: "0",
                    ECH: "0.928",
                    Flaeche: "2.3",
                    GCH: "0.228"
                }, {
                    name: "ProMaker L6000",
                    price: "280000",
                    buildRate: "0",
                    ECH: "0.928",
                    Flaeche: "2.89",
                    GCH: "0.228"
                }, {
                    name: "ProMaker L6000 D",
                    price: "280000",
                    buildRate: "0",
                    ECH: "0.928",
                    Flaeche: "2.89",
                    GCH: "0.228"
                }, {
                    name: "ProMaker L7000",
                    price: "350000",
                    buildRate: "0",
                    ECH: "0.928",
                    Flaeche: "2.89",
                    GCH: "0.228"
                }, {
                    name: "ProMaker L7000 D",
                    price: "390000",
                    buildRate: "0",
                    ECH: "0.928",
                    Flaeche: "2.89",
                    GCH: "0.228"
                }, {
                    name: "ProMaker D35",
                    price: "400000",
                    buildRate: "0",
                    ECH: "0.608",
                    Flaeche: "1.68",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "Envisiontec(VP)",
            model: [
                {
                    name: "Xede 3SP",
                    price: "214500",
                    buildRate: "80",
                    ECH: "1.056",
                    Flaeche: "2.39",
                    GCH: "0.228"
                },
                {
                    name: "Xede 3SP Ortho",
                    price: "214500",
                    buildRate: "80",
                    ECH: "1.056",
                    Flaeche: "1.47",
                    GCH: "0.228"
                },
                {
                    name: "Xtreme 3SP",
                    price: "124300",
                    buildRate: "80",
                    ECH: "1.056",
                    Flaeche: "2.01",
                    GCH: "0.228"
                },
                {
                    name: "Xtreme 3SP Ortho",
                    price: "124300",
                    buildRate: "80",
                    ECH: "1.056",
                    Flaeche: "2.72",
                    GCH: "0.228"
                },
                {
                    name: "Xtreme 3SP Hi-Res",
                    price: "154400",
                    buildRate: "80",
                    ECH: "1.056",
                    Flaeche: "2.72",
                    GCH: "0.228"
                },
                {
                    name: "Vector 3SP",
                    price: "43900",
                    buildRate: "120",
                    ECH: "0.352",
                    Flaeche: "0.81",
                    GCH: "0.228"
                },
                {
                    name: "Vector 3SP Hi-Res",
                    price: "77500",
                    buildRate: "120",
                    ECH: "0.352",
                    Flaeche: "0.81",
                    GCH: "0.228"
                },
                {
                    name: "3Dent 3PS",
                    price: "750000",
                    buildRate: "120",
                    ECH: "0.288",
                    Flaeche: "0.56",
                    GCH: "0.228"
                },
                {
                    name: "Ultra 3SP Ortho",
                    price: "38900",
                    buildRate: "120",
                    ECH: "0.288",
                    Flaeche: "0.56",
                    GCH: "0.228"
                },
                {
                    name: "Ultra 3SP ",
                    price: "38900",
                    buildRate: "120",
                    ECH: "0.288",
                    Flaeche: "0.56",
                    GCH: "0.228"
                },
                {
                    name: "Ultra 3SP  Hi-Res",
                    price: "70000",
                    buildRate: "120",
                    ECH: "0.228",
                    Flaeche: "0.56",
                    GCH: "0.228"
                },
                {
                    name: "Perfactory 3 DDP",
                    price: "85900",
                    buildRate: "150",
                    ECH: "0.182",
                    Flaeche: "0.35",
                    GCH: "0.228"
                },
                {
                    name: "Perfactory 4 DDP",
                    price: "99900",
                    buildRate: "150",
                    ECH: "0.182",
                    Flaeche: "0.35",
                    GCH: "0.228"
                },
                {
                    name: " Perfactory 4 DDP M",
                    price: "118000",
                    buildRate: "150",
                    ECH: "0.182",
                    Flaeche: "0.35",
                    GCH: "0.228"
                },
                {
                    name: " Perfactory 4 DDP XL",
                    price: "118000",
                    buildRate: "150",
                    ECH: "0.182",
                    Flaeche: "0.35",
                    GCH: "0.228"
                },
                {
                    name: "Perfactory 3 DSP",
                    price: "100000",
                    buildRate: "150",
                    ECH: "0.182",
                    Flaeche: "0.35",
                    GCH: "0.228"
                },
                {
                    name: "Perfactory 4 DSP",
                    price: "118000",
                    buildRate: "150",
                    ECH: "0.182",
                    Flaeche: "0.35",
                    GCH: "0.228"
                },
                {
                    name: "Perfactory 4 DSP XL",
                    price: "125000",
                    buildRate: "150",
                    ECH: "0.182",
                    Flaeche: "0.35",
                    GCH: "0.228"
                },
                {
                    name: "Apollo Plus",
                    price: "67000",
                    buildRate: "0",
                    ECH: "0.077",
                    Flaeche: "0.25",
                    GCH: "0.228"
                },
                {
                    name: "DDDP Plus",
                    price: "42000",
                    buildRate: "0",
                    ECH: "0.077",
                    Flaeche: "0.35",
                    GCH: "0.228"
                },
                {
                    name: "Vida HD",
                    price: "26900",
                    buildRate: "0",
                    ECH: "0.106",
                    Flaeche: "0.137",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "Nanoscribe(VP)",
            model: [
                {
                    name: "Photonic Professional GT",
                    price: "430000",
                    buildRate: "0",
                    ECH: "0.384",
                    Flaeche: "1.21",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "DWS(VP)",
            model: [
                {
                    name: "XFab 2000",
                    price: "6000",
                    buildRate: "0",
                    ECH: "0.05",
                    Flaeche: "0.24",
                    GCH: "0.228"
                },
                {
                    name: "XFab 3500HD",
                    price: "15000",
                    buildRate: "0",
                    ECH: "0.05",
                    Flaeche: "0.24",
                    GCH: "0.228"
                },
                {
                    name: "DigitalWax 028J",
                    price: "45000",
                    buildRate: "0",
                    ECH: "0.128",
                    Flaeche: "0.196",
                    GCH: "0.228"
                },
                {
                    name: "DigitalWax 029J",
                    price: "89000",
                    buildRate: "0",
                    ECH: "0.16",
                    Flaeche: "0.403",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "C MET(VP)",
            model: [
                {
                    name: "Rapid Meister ATOMm-4000",
                    price: "30000",
                    buildRate: "32.4",
                    ECH: "0.48",
                    Flaeche: "2.261",
                    GCH: "0.228"
                },
                {
                    name: "Rapid Meister ATOMm-8000",
                    price: "40000",
                    buildRate: "43.2",
                    ECH: "0.64",
                    Flaeche: "2.261",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "D-MEC(VP)",
            model: [
                {
                    name: "Acculas BA-30H",
                    price: "30000",
                    buildRate: "0",
                    ECH: "0.704",
                    Flaeche: "1.12",
                    GCH: "0.228"
                }, {
                    name: "Acculas BA-30S",
                    price: "30000",
                    buildRate: "0",
                    ECH: "0.416",
                    Flaeche: "1.12",
                    GCH: "0.228"
                }, {
                    name: "Acculas BA-45S",
                    price: "32000",
                    buildRate: "0",
                    ECH: "0.64",
                    Flaeche: "1.76",
                    GCH: "0.228"
                }, {
                    name: "Acculas BA-85S",
                    price: "40000",
                    buildRate: "0",
                    ECH: "0.64",
                    Flaeche: "2.28",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "Carima(VP)",
            model: [
                {
                    name: "DM 250",
                    price: "25000",
                    buildRate: "0",
                    ECH: "0.048",
                    Flaeche: "0.299",
                    GCH: "0.228"
                },
                {
                    name: "IM96",
                    price: "13000",
                    buildRate: "0",
                    ECH: "0.0384",
                    Flaeche: "0.0992",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "3D Systems(VP)",
            model: [
                {
                    name: "ProJet 6000 SD,HD and MP",
                    price: "185000",
                    buildRate: "0",
                    ECH: "0.24",
                    Flaeche: "1.49",
                    GCH: "0.228"
                },
                {
                    name: "ProJet 7000 SD,HD and MP",
                    price: "300000",
                    buildRate: "0",
                    ECH: "0.24",
                    Flaeche: "1.83",
                    GCH: "0.228"
                },
                {
                    name: "ProX 800",
                    price: "585000",
                    buildRate: "0",
                    ECH: "2.3",
                    Flaeche: "2.19",
                    GCH: "0.228"
                },
                {
                    name: "ProX950",
                    price: "990000",
                    buildRate: "189",
                    ECH: "3.84",
                    Flaeche: "3.52",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "Bright Laser Technologies(PBF)",
            model: [
                {
                    name: "BLT-S210",
                    price: "273000",
                    buildRate: "120",
                    ECH: "1.6",
                    Flaeche: "1.2",
                    GCH: "0.228"
                },
                {
                    name: "BLT-S310",
                    price: "532000",
                    buildRate: "120",
                    ECH: "2.56",
                    Flaeche: "3.19",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "EPlus 3D(PBF)",
            model: [
                {
                    name: "EP-C7250",
                    price: "190000",
                    buildRate: "260",
                    ECH: "4.8",
                    Flaeche: "3",
                    GCH: "0.228"
                },
                {
                    name: "EP-C5050",
                    price: "140000",
                    buildRate: "210",
                    ECH: "3.2",
                    Flaeche: "2.6",
                    GCH: "0.228"
                },
                {
                    name: "EP-C3650",
                    price: "110000",
                    buildRate: "210",
                    ECH: "2.56",
                    Flaeche: "3.25",
                    GCH: "0.228"
                },
                {
                    name: "EP-M250",
                    price: "375000",
                    buildRate: "260",
                    ECH: "1.92",
                    Flaeche: "2.5",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "HengTong(PBF)",
            model: [
                {
                    name: "SLS1200",
                    price: "267000",
                    buildRate: "1300",
                    ECH: "2.88",
                    Flaeche: "11.7",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "LongYuan(PBF)",
            model: [
                {
                    name: "AFS-360",
                    price: "99000",
                    buildRate: "100",
                    ECH: "1.92",
                    Flaeche: "1.51",
                    GCH: "0.228"
                },
                {
                    name: "AFS-500",
                    price: "134000",
                    buildRate: "120",
                    ECH: "4.8",
                    Flaeche: "2.37",
                    GCH: "0.228"
                },
                {
                    name: "LaserCore-5100",
                    price: "180000",
                    buildRate: "130",
                    ECH: "4.8",
                    Flaeche: "2.21",
                    GCH: "0.228"
                },
                {
                    name: "LaserCore-6000",
                    price: "240000",
                    buildRate: "130",
                    ECH: "8",
                    Flaeche: "4.3",
                    GCH: "0.228"
                },
                {
                    name: "LaserCore-5300",
                    price: "210000",
                    buildRate: "120",
                    ECH: "5.76",
                    Flaeche: "2.94",
                    GCH: "0.228"
                },
                {
                    name: "LaserCore-6000",
                    price: "260000",
                    buildRate: "130",
                    ECH: "8",
                    Flaeche: "4.3",
                    GCH: "0.228"
                },
                {
                    name: "AFS-M120",
                    price: "180000",
                    buildRate: "15",
                    ECH: "2.24",
                    Flaeche: "2.1",
                    GCH: "0.228"
                },
                {
                    name: "AFS-M260",
                    price: "230000",
                    buildRate: "15",
                    ECH: "2.56",
                    Flaeche: "1.7",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "Prodways(PBF)",
            model: [
                {
                    name: "ProMaker P1000",
                    price: "99000",
                    buildRate: "1100",
                    ECH: "5.12",
                    Flaeche: "1.64",
                    GCH: "0.228"
                },
                {
                    name: "ProMaker P2000 ST",
                    price: "190000",
                    buildRate: "1000",
                    ECH: "5.12",
                    Flaeche: "2.01",
                    GCH: "0.228"
                },
                {
                    name: "ProMaker P2000 HT",
                    price: "270000",
                    buildRate: "12000",
                    ECH: "3.84",
                    Flaeche: "2.01",
                    GCH: "0.228"
                },
                {
                    name: "ProMacher P4500SD",
                    price: "270000",
                    buildRate: "15000",
                    ECH: "4.8",
                    Flaeche: "3.95",
                    GCH: "0.228"
                },
                {
                    name: "ProMacher P4500HS",
                    price: "310000",
                    buildRate: "27000",
                    ECH: "4.8",
                    Flaeche: "3.95",
                    GCH: "0.228"
                },
                {
                    name: "ProMacher P4500X",
                    price: "360000",
                    buildRate: "4000",
                    ECH: "4.8",
                    Flaeche: "3.95",
                    GCH: "0.228"
                },
                {
                    name: "ProMacher P4500HT",
                    price: "410000",
                    buildRate: "4000",
                    ECH: "4.8",
                    Flaeche: "3.95",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "Concept Laser(PBF)",
            model: [
                {
                    name: "Mlab cusing",
                    price: "164000",
                    buildRate: "5",
                    ECH: "1.12",
                    Flaeche: "0.854",
                    GCH: "0.228"
                },
                {
                    name: "Mlab cusing R",
                    price: "184000",
                    buildRate: "4",
                    ECH: "1.12",
                    Flaeche: "0.854",
                    GCH: "0.228"
                },
                {
                    name: "M1 cusing",
                    price: "359000",
                    buildRate: "4",
                    ECH: "0.384",
                    Flaeche: "5.57",
                    GCH: "0.228"
                },
                {
                    name: "M2 cusing",
                    price: "449000",
                    buildRate: "4",
                    ECH: "0.384",
                    Flaeche: "4.6",
                    GCH: "0.228"
                },
                {
                    name: "X LINE 2000R",
                    price: "1575000",
                    buildRate: "34",
                    ECH: "0.64",
                    Flaeche: "19",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "EOS(PBF)",
            model: [
                {
                    name: "FORMIGA P110",
                    price: "129000",
                    buildRate: "1200",
                    ECH: "1.6",
                    Flaeche: "1.41",
                    GCH: "0.228"
                },
                {
                    name: "EOS P 396",
                    price: "267000",
                    buildRate: "3000",
                    ECH: "3.2",
                    Flaeche: "2.16",
                    GCH: "0.228"
                },
                {
                    name: "EOSINT P 770",
                    price: "633000",
                    buildRate: "10000",
                    ECH: "3.84",
                    Flaeche: "3.49",
                    GCH: "0.228"
                },
                {
                    name: "EOS P 810",
                    price: "852000",
                    buildRate: "2700",
                    ECH: "3.2",
                    Flaeche: "3.25",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "0R Laser(PBF)",
            model: [
                {
                    name: "ORLAS CREATOR",
                    price: "95000",
                    buildRate: "20",
                    ECH: "0.768",
                    Flaeche: "0.615",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "ReaLizer(PBF)",
            model: [
                {
                    name: "SLM 125",
                    price: "275000",
                    buildRate: "0",
                    ECH: "2.048",
                    Flaeche: "2.48",
                    GCH: "0.228"
                },
                {
                    name: "SLM 300i",
                    price: "420000",
                    buildRate: "0",
                    ECH: "2.048",
                    Flaeche: "1.8",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "Trumpf(PBF)",
            model: [
                {
                    name: "TruPrint 1000",
                    price: "170000",
                    buildRate: "18",
                    ECH: "0.612",
                    Flaeche: "2.4276",
                    GCH: "0.228"
                },
                {
                    name: "TruPrint 3000",
                    price: "430000",
                    buildRate: "60",
                    ECH: "4.704",
                    Flaeche: "7",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "Sharebot(PBF)",
            model: [
                {
                    name: "SnowWhite",
                    price: "40000",
                    buildRate: "350",
                    ECH: "0.25",
                    Flaeche: "2",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "Sisma(PBF)",
            model: [
                {
                    name: "mysint 100",
                    price: "165000",
                    buildRate: "0",
                    ECH: "0.608",
                    Flaeche: "1.506",
                    GCH: "0.228"
                },
                {
                    name: "mysint 300",
                    price: "165000",
                    buildRate: "0",
                    ECH: "0.384",
                    Flaeche: "4.76",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "Matsuura(PBF)",
            model: [
                {
                    name: "Lumex Avance-25",
                    price: "550000",
                    buildRate: "35",
                    ECH: "1.44",
                    Flaeche: "14.88",
                    GCH: "0.228"
                },
                {
                    name: "Lumex Avance-60",
                    price: "1200000",
                    buildRate: "35",
                    ECH: "1.44",
                    Flaeche: "9.3",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "RICOH(PBF)",
            model: [
                {
                    name: "RICOH AM S5500P",
                    price: "685000",
                    buildRate: "30",
                    ECH: "3.2",
                    Flaeche: "3.192",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "Sentrol(PBF)",
            model: [
                {
                    name: "SS150",
                    price: "55000",
                    buildRate: "26",
                    ECH: "0.608",
                    Flaeche: "0.944",
                    GCH: "0.228"
                },
                {
                    name: "SS600",
                    price: "120000",
                    buildRate: "29",
                    ECH: "0.768",
                    Flaeche: "3.036",
                    GCH: "0.228"
                },
                {
                    name: "SS600G",
                    price: "600000",
                    buildRate: "1108",
                    ECH: "1.12",
                    Flaeche: "2.44",
                    GCH: "0.228"
                },
                {
                    name: "SP100",
                    price: "55000",
                    buildRate: "400",
                    ECH: "0.32",
                    Flaeche: "2",
                    GCH: "0.228"
                },
                {
                    name: "SP250",
                    price: "200000",
                    buildRate: "400",
                    ECH: "0.32",
                    Flaeche: "2",
                    GCH: "0.228"
                },
                {
                    name: "SM250",
                    price: "350000",
                    buildRate: "10",
                    ECH: "0.96",
                    Flaeche: "1.12",
                    GCH: "0.228"
                },
                {
                    name: "SMJ80",
                    price: "500000",
                    buildRate: "5",
                    ECH: "0.8",
                    Flaeche: "0.76",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "Arcam(PBF)",
            model: [
                {
                    name: "A2X",
                    price: "700000",
                    buildRate: "80",
                    ECH: "2.24",
                    Flaeche: "1.665",
                    GCH: "0.228"
                },
                {
                    name: "Q10plus",
                    price: "525000",
                    buildRate: "1000",
                    ECH: "2.24",
                    Flaeche: "1.665",
                    GCH: "0.228"
                },
                {
                    name: "Q20plus",
                    price: "800000",
                    buildRate: "4000",
                    ECH: "2.24",
                    Flaeche: "2.99",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "Sintratec(PBF)",
            model: [
                {
                    name: "Sintratec Kit",
                    price: "5000",
                    buildRate: "11",
                    ECH: "0.544",
                    Flaeche: "0.312",
                    GCH: "0.228"
                },
                {
                    name: "Sintratec S1",
                    price: "20000",
                    buildRate: "20",
                    ECH: "0.608",
                    Flaeche: "0.245",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "HP Ink.(PBF)",
            model: [
                {
                    name: "Jet Fusion 4200",
                    price: "250000",
                    buildRate: "4115",
                    ECH: "3.52",
                    Flaeche: "2.64",
                    GCH: "0.228"
                },
                {
                    name: "Jet Fusion 3200",
                    price: "165000",
                    buildRate: "3000",
                    ECH: "3.52",
                    Flaeche: "2.67",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "3D Systems(PBF)",
            model: [
                {
                    name: "sPro 140",
                    price: "445000",
                    buildRate: "3000",
                    ECH: "1.12",
                    Flaeche: "4.07",
                    GCH: "0.228"
                },
                {
                    name: "sPro 60HD",
                    price: "349000",
                    buildRate: "1800",
                    ECH: "1.28",
                    Flaeche: "2.66",
                    GCH: "0.228"
                },
                {
                    name: "sPro 230",
                    price: "534000",
                    buildRate: "3000",
                    ECH: "1.12",
                    Flaeche: "5.98",
                    GCH: "0.228"
                },
                {
                    name: "ProX DMP Flex 100",
                    price: "225000",
                    buildRate: "0",
                    ECH: "0.864",
                    Flaeche: "2.08",
                    GCH: "0.228"
                },
                {
                    name: "ProX DMP 200",
                    price: "425000",
                    buildRate: "0",
                    ECH: "2.56",
                    Flaeche: "1.8",
                    GCH: "0.228"
                },
                {
                    name: "proX DMP300",
                    price: "685000",
                    buildRate: "0",
                    ECH: "4.8",
                    Flaeche: "5.28",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "Bright Laser Technologies(DED)",
            model: [
                {
                    name: "BLT-C600",
                    price: "684000",
                    buildRate: "200",
                    ECH: "6.4",
                    Flaeche: "5.67",
                    GCH: "0.228"
                },
                {
                    name: "BLT-C1000",
                    price: "1217000",
                    buildRate: "200",
                    ECH: "12.8",
                    Flaeche: "10.4",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "LongYuan(DED)",
            model: [
                {
                    name: "AFS-D600",
                    price: "200000",
                    buildRate: "0",
                    ECH: "3.84",
                    Flaeche: "0.24",
                    GCH: "0.228"
                },
                {
                    name: "AFS-D800V",
                    price: "240000",
                    buildRate: "0",
                    ECH: "6.08",
                    Flaeche: "0.48",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "BeAM(DED)",
            model: [
                {
                    name: "Modulo 250",
                    price: "525000",
                    buildRate: "20",
                    ECH: "0.64",
                    Flaeche: "0.4",
                    GCH: "0.228"
                },
                {
                    name: "Modulo 400",
                    price: "525000",
                    buildRate: "70",
                    ECH: "0.64",
                    Flaeche: "0.45",
                    GCH: "0.228"
                },
                {
                    name: "Modulo 800",
                    price: "1100000",
                    buildRate: "130",
                    ECH: "0.64",
                    Flaeche: "0.6",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "Optomec(DED)",
            model: [
                {
                    name: "LENS MR-7",
                    price: "620000",
                    buildRate: "100",
                    ECH: "0.68",
                    Flaeche: "4.5",
                    GCH: "0.228"
                },
                {
                    name: "LENS 850-R",
                    price: "995000",
                    buildRate: "500",
                    ECH: "0.63",
                    Flaeche: "9",
                    GCH: "0.228"
                },
                {
                    name: "LENS MTS - Hybrid Open Atmosphere",
                    price: "300000",
                    buildRate: "0",
                    ECH: "0.64",
                    Flaeche: "3.3",
                    GCH: "0.228"
                },
                {
                    name: "MX-Grand",
                    price: "400000",
                    buildRate: "0",
                    ECH: "0.64",
                    Flaeche: "3.3",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "BigRep(ME)",
            model: [
                {
                    name: "BigRep ONE",
                    price: "50000",
                    buildRate: "400",
                    ECH: "1.216",
                    Flaeche: "4.16",
                    GCH: "0.228"
                },
                {
                    name: "BigRep STUDIO",
                    price: "29500",
                    buildRate: "600",
                    ECH: "1.216",
                    Flaeche: "2",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "Envisiontec(ME)",
            model: [
                {
                    name: "3D-Bioplotter Manufacturer series",
                    price: "254400",
                    buildRate: "150",
                    ECH: "0.6",
                    Flaeche: "0.6",
                    GCH: "0.228"
                },
                {
                    name: "3D-Bioplotter Developer Series",
                    price: "145900",
                    buildRate: "150",
                    ECH: "0.5",
                    Flaeche: "0.6",
                    GCH: "0.228"
                },
                {
                    name: "3D-Bioplotter Starter Series",
                    price: "74000",
                    buildRate: "150",
                    ECH: "0.45",
                    Flaeche: "0.51",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "German RepRap(ME)",
            model: [
                {
                    name: "X350",
                    price: "6000",
                    buildRate: "150",
                    ECH: "0.08",
                    Flaeche: "0.264",
                    GCH: "0.228"
                },
                {
                    name: "X400",
                    price: "8500",
                    buildRate: "150",
                    ECH: "0.192",
                    Flaeche: "0.49",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "Massivit(ME)",
            model: [
                {
                    name: "Massivit 1800",
                    price: "350000",
                    buildRate: "0",
                    ECH: "4.096",
                    Flaeche: "6.91",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "Rokit(ME)",
            model: [
                {
                    name: "3Dison Pro",
                    price: "6600",
                    buildRate: "20",
                    ECH: "0.211",
                    Flaeche: "0.204",
                    GCH: "0.228"
                },
                {
                    name: "3Dison H700",
                    price: "10300",
                    buildRate: "20",
                    ECH: "0.211",
                    Flaeche: "0.204",
                    GCH: "0.228"
                },
                {
                    name: "3Dison AEP",
                    price: "14400",
                    buildRate: "24",
                    ECH: "0.317",
                    Flaeche: "0.21",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "Voxeljet(BJ)",
            model: [
                {
                    name: "VX200",
                    price: "125000",
                    buildRate: "3000",
                    ECH: "6",
                    Flaeche: "8.75",
                    GCH: "0.228"
                },
                {
                    name: "VX500",
                    price: "329000",
                    buildRate: "3000",
                    ECH: "12",
                    Flaeche: "52",
                    GCH: "0.228"
                },
                {
                    name: "VX1000",
                    price: "660000",
                    buildRate: "23000",
                    ECH: "20",
                    Flaeche: "88",
                    GCH: "0.228"
                },
                {
                    name: "VX2000",
                    price: "960000",
                    buildRate: "47000",
                    ECH: "23",
                    Flaeche: "171",
                    GCH: "0.228"
                },
                {
                    name: "VX4000",
                    price: "1584000",
                    buildRate: "123000",
                    ECH: "32",
                    Flaeche: "384",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "Sentrol(BJ)",
            model: [
                {
                    name: "SB300",
                    price: "32000",
                    buildRate: "3000",
                    ECH: "0.8",
                    Flaeche: "1.5",
                    GCH: "0.228"
                },
                {
                    name: "SB1000",
                    price: "900000",
                    buildRate: "15000",
                    ECH: "1.12",
                    Flaeche: "4.625",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "Microjet Technology(BJ)",
            model: [
                {
                    name: "ComeTrue T10",
                    price: "900000",
                    buildRate: "640",
                    ECH: "0.0768",
                    Flaeche: "0.496",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "ExOne(BJ)",
            model: [
                {
                    name: "Innovent",
                    price: "162500",
                    buildRate: "166",
                    ECH: "6.67",
                    Flaeche: "1.272",
                    GCH: "0.228"
                },
                {
                    name: "M-Flex",
                    price: "452500",
                    buildRate: "1600",
                    ECH: "12.3",
                    Flaeche: "2.345",
                    GCH: "0.228"
                },
                {
                    name: "S-print",
                    price: "775000",
                    buildRate: "36000",
                    ECH: "23.4",
                    Flaeche: "8.3",
                    GCH: "0.228"
                },
                {
                    name: "S-Max",
                    price: "1140000",
                    buildRate: "105000",
                    ECH: "33.4",
                    Flaeche: "36.608",
                    GCH: "0.228"
                },
                {
                    name: "S-Max Pro",
                    price: "145000",
                    buildRate: "135000",
                    ECH: "12.78",
                    Flaeche: "36.608",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "3D Systems(BJ)",
            model: [
                {
                    name: "ProJet CJP 260C",
                    price: "28000",
                    buildRate: "800",
                    ECH: "0.3072",
                    Flaeche: "1.1186",
                    GCH: "0.228"
                },
                {
                    name: "ProJet CJP 360",
                    price: "30000",
                    buildRate: "800",
                    ECH: "0.3072",
                    Flaeche: "1.596",
                    GCH: "0.228"
                },
                {
                    name: "ProJet CJP 460Plus",
                    price: "45000",
                    buildRate: "1100",
                    ECH: "0.3072",
                    Flaeche: "1.596",
                    GCH: "0.228"
                },
                {
                    name: "ProJet CJP 660Pro",
                    price: "68000",
                    buildRate: "2600",
                    ECH: "0.272",
                    Flaeche: "0.65",
                    GCH: "0.228"
                },
                {
                    name: "ProJet CJP 860Pro",
                    price: "113000",
                    buildRate: "2800",
                    ECH: "0.272",
                    Flaeche: "0.65",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "Envisiontec(SL)",
            model: [
                {
                    name: "SLCOM 1",
                    price: "1000000",
                    buildRate: "0",
                    ECH: "6.2",
                    Flaeche: "10.66",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "Mcor Technologies(SL)",
            model: [
                {
                    name: "ARKe",
                    price: "18000",
                    buildRate: "0",
                    ECH: "0.112",
                    Flaeche: "0.522",
                    GCH: "0.228"
                },
                {
                    name: "Matrix 300+",
                    price: "39900",
                    buildRate: "0",
                    ECH: "0.112",
                    Flaeche: "0.665",
                    GCH: "0.228"
                },
                {
                    name: "Iris HD",
                    price: "47900",
                    buildRate: "0",
                    ECH: "0.112",
                    Flaeche: "0.835",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "Stratasys(MJ)",
            model: [
                {
                    name: "Objet1000",
                    price: "607000",
                    buildRate: "0",
                    ECH: "0.48",
                    Flaeche: "5.62",
                    GCH: "0.228"
                },
                {
                    name: "Objet500 Connex3",
                    price: "260000",
                    buildRate: "0",
                    ECH: "0.48",
                    Flaeche: "1.764",
                    GCH: "0.228"
                },
                {
                    name: "Objet350 Connex3",
                    price: "200000",
                    buildRate: "0",
                    ECH: "0.48",
                    Flaeche: "1.764",
                    GCH: "0.228"
                },
                {
                    name: "Objet260 Connex3",
                    price: "125000",
                    buildRate: "0",
                    ECH: "0.48",
                    Flaeche: "1.044",
                    GCH: "0.228"
                },
                {
                    name: "Objet30 Prime",
                    price: "45900",
                    buildRate: "0",
                    ECH: "0.48",
                    Flaeche: "0.4956",
                    GCH: "0.228"
                },
                {
                    name: "Objet30 Pro",
                    price: "33900",
                    buildRate: "0",
                    ECH: "0.48",
                    Flaeche: "0.4956",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "Solidscape(MJ)",
            model: [
                {
                    name: "3Z Max 2",
                    price: "55600",
                    buildRate: "0",
                    ECH: "0.8",
                    Flaeche: "0.276",
                    GCH: "0.228"
                },
                {
                    name: "3Z Pro",
                    price: "45600",
                    buildRate: "0",
                    ECH: "0.8",
                    Flaeche: "0.276",
                    GCH: "0.228"
                },
                {
                    name: "3Z Studio",
                    price: "24600",
                    buildRate: "0",
                    ECH: "0.8",
                    Flaeche: "0.276",
                    GCH: "0.228"
                },
                {
                    name: "3Z Lab",
                    price: "25600",
                    buildRate: "0",
                    ECH: "0.8",
                    Flaeche: "0.276",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "Nano Dimension(MJ)",
            model: [
                {
                    name: "DragonFly 2020",
                    price: "200000",
                    buildRate: "0",
                    ECH: "0.896",
                    Flaeche: "6",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "Optomec(MJ)",
            model: [
                {
                    name: "Aerosol Jet Print Engine",
                    price: "100000",
                    buildRate: "100",
                    ECH: "0.704",
                    Flaeche: "0.47",
                    GCH: "0.228"
                },
                {
                    name: "Aerosol Jet 200",
                    price: "195000",
                    buildRate: "100",
                    ECH: "0.704",
                    Flaeche: "0.47",
                    GCH: "0.228"
                },
                {
                    name: "Aerosol Jet 300",
                    price: "300000",
                    buildRate: "200",
                    ECH: "12.112",
                    Flaeche: "1.4025",
                    GCH: "0.228"
                },
                {
                    name: "Aerosol Jet 5X",
                    price: "495000",
                    buildRate: "200",
                    ECH: "2.816",
                    Flaeche: "1.4025",
                    GCH: "0.228"
                }
            ]
        },
        {
            name: "3D Systems(MJ)",
            model: [
                {
                    name: "ProJet MJP 2500 ",
                    price: "32000",
                    buildRate: "189",
                    ECH: "0.608",
                    Flaeche: "1.295",
                    GCH: "0.228"
                },
                {
                    name: "ProJet MJP 2500 Plus",
                    price: "38000",
                    buildRate: "189",
                    ECH: "0.768",
                    Flaeche: "1.295",
                    GCH: "0.228"
                },
                {
                    name: "ProJet 3510SD",
                    price: "59000",
                    buildRate: "189",
                    ECH: "0.768",
                    Flaeche: "1.18",
                    GCH: "0.228"
                },
                {
                    name: "ProJet MJP 3600",
                    price: "85000",
                    buildRate: "0",
                    ECH: "0.768",
                    Flaeche: "1.18",
                    GCH: "0.228"
                },
                {
                    name: "ProJet MJP 3600 Max",
                    price: "91000",
                    buildRate: "0",
                    ECH: "0.768",
                    Flaeche: "1.18",
                    GCH: "0.228"
                },
                {
                    name: "ProJet MJP 3600 dental",
                    price: "74000",
                    buildRate: "256",
                    ECH: "0.768",
                    Flaeche: "1.18",
                    GCH: "0.228"
                },
                {
                    name: "ProJet MJP 3600W",
                    price: "85000",
                    buildRate: "256",
                    ECH: "0.768",
                    Flaeche: "1.18",
                    GCH: "0.228"
                },
                {
                    name: "ProJet MJP 3600W Max",
                    price: "98000",
                    buildRate: "256",
                    ECH: "0.768",
                    Flaeche: "1.18",
                    GCH: "0.228"
                },
                {
                    name: "Projet MJP 5000",
                    price: "159000",
                    buildRate: "0",
                    ECH: "0.384",
                    Flaeche: "1.39",
                    GCH: "0.228"
                },
                {
                    name: "ProJet MJP 5500X",
                    price: "225000",
                    buildRate: "0",
                    ECH: "0.384",
                    Flaeche: "2.48",
                    GCH: "0.228"
                }
            ]
        }
    ],
    materialList: [
        {name: "photopolymer", value: "0.058"},
        {name: "foundry sand", value: "0.007"},
        {name: "titanium alloys", value: "1.1275"},
        {name: "aluminum alloys", value: "0.0108"},
        {name: "stainless steel", value: "0.12"},
        {name: "cobalt chromium", value: "0.1305"},
        {name: "nylon", value: "0.023"},
        {name: "polyamide", value: "0.02875"},
        {name: "ABS", value: "0.10395"},
        {name: "PMMA", value: "0.03481"},
        {name: "silica sand", value: "0.003975"},
        {name: "wax", value: "0.0077"}
    ],
    confirm: "Confirm",
    import: "Please upload the STL file",
}
