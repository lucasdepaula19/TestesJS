let zsearchTicketBody = {
    "collection_cr": {
        "@COUNT": "11",
        "@START": "1",
        "@TOTAL_COUNT": "11",
        "cr": [
            {
                "@id": "575590",
                "@REL_ATTR": "cr:575590",
                "@COMMON_NAME": "PR163308",
                "link": {
                    "@href": "http://mctycasm-d-app:8050/caisd-rest/cr/575590",
                    "@rel": "self"
                },
                "active": {
                    "@id": "201",
                    "@REL_ATTR": "1",
                    "@COMMON_NAME": "SIM",
                    "link": {
                        "@href": "http://mctycasm-d-app:8050/caisd-rest/bool/201",
                        "@rel": "self"
                    }
                },
                "customer": {
                    "@id": "U'D810D0393CAA6743A91EEA317635D158'",
                    "@REL_ATTR": "U'D810D0393CAA6743A91EEA317635D158'",
                    "@COMMON_NAME": "MATHEUS BORÇARI SANTANA",
                    "link": {
                        "@href": "http://mctycasm-d-app:8050/caisd-rest/cnt/U'D810D0393CAA6743A91EEA317635D158'",
                        "@rel": "self"
                    }
                },
                "description": "teste",
                "ref_num": "PR163308",
                "status": {
                    "@id": "5212",
                    "@REL_ATTR": "RE",
                    "@COMMON_NAME": "Resolvido",
                    "link": {
                        "@href": "http://mctycasm-d-app:8050/caisd-rest/crs/5212",
                        "@rel": "self"
                    }
                },
                "summary": "teste",
                "type": {
                    "@id": "181",
                    "@REL_ATTR": "P",
                    "@COMMON_NAME": "Problema",
                    "link": {
                        "@href": "http://mctycasm-d-app:8050/caisd-rest/crt/181",
                        "@rel": "self"
                    }
                }
            },
            {
                "@id": "575582",
                "@REL_ATTR": "cr:575582",
                "@COMMON_NAME": "PR163300",
                "link": {
                    "@href": "http://mctycasm-d-app:8050/caisd-rest/cr/575582",
                    "@rel": "self"
                },
                "active": {
                    "@id": "201",
                    "@REL_ATTR": "1",
                    "@COMMON_NAME": "SIM",
                    "link": {
                        "@href": "http://mctycasm-d-app:8050/caisd-rest/bool/201",
                        "@rel": "self"
                    }
                },
                "affected_resource": {
                    "@id": "U'D7119C659807624591C229C038CE6D54'",
                    "@REL_ATTR": "U'D7119C659807624591C229C038CE6D54'",
                    "@COMMON_NAME": "445972",
                    "link": {
                        "@href": "http://mctycasm-d-app:8050/caisd-rest/nr/U'D7119C659807624591C229C038CE6D54'",
                        "@rel": "self"
                    }
                },
                "customer": {
                    "@id": "U'D810D0393CAA6743A91EEA317635D158'",
                    "@REL_ATTR": "U'D810D0393CAA6743A91EEA317635D158'",
                    "@COMMON_NAME": "MATHEUS BORÇARI SANTANA",
                    "link": {
                        "@href": "http://mctycasm-d-app:8050/caisd-rest/cnt/U'D810D0393CAA6743A91EEA317635D158'",
                        "@rel": "self"
                    }
                },
                "description": "Created from REST API Java Samples code  (criado a partir do incidente IN163269)",
                "ref_num": "PR163300",
                "status": {
                    "@id": "5212",
                    "@REL_ATTR": "RE",
                    "@COMMON_NAME": "Resolvido",
                    "link": {
                        "@href": "http://mctycasm-d-app:8050/caisd-rest/crs/5212",
                        "@rel": "self"
                    }
                },
                "summary": "TESTE TESTE Informação de resumo do ticket",
                "type": {
                    "@id": "181",
                    "@REL_ATTR": "P",
                    "@COMMON_NAME": "Problema",
                    "link": {
                        "@href": "http://mctycasm-d-app:8050/caisd-rest/crt/181",
                        "@rel": "self"
                    }
                }
            },
            {
                "@id": "575543",
                "@REL_ATTR": "cr:575543",
                "@COMMON_NAME": "PR163289",
                "link": {
                    "@href": "http://mctycasm-d-app:8050/caisd-rest/cr/575543",
                    "@rel": "self"
                },
                "active": {
                    "@id": "201",
                    "@REL_ATTR": "1",
                    "@COMMON_NAME": "SIM",
                    "link": {
                        "@href": "http://mctycasm-d-app:8050/caisd-rest/bool/201",
                        "@rel": "self"
                    }
                },
                "customer": {
                    "@id": "U'D810D0393CAA6743A91EEA317635D158'",
                    "@REL_ATTR": "U'D810D0393CAA6743A91EEA317635D158'",
                    "@COMMON_NAME": "MATHEUS BORÇARI SANTANA",
                    "link": {
                        "@href": "http://mctycasm-d-app:8050/caisd-rest/cnt/U'D810D0393CAA6743A91EEA317635D158'",
                        "@rel": "self"
                    }
                },
                "description": "teste p1",
                "ref_num": "PR163289",
                "status": {
                    "@id": "5200",
                    "@REL_ATTR": "OP",
                    "@COMMON_NAME": "Aberta",
                    "link": {
                        "@href": "http://mctycasm-d-app:8050/caisd-rest/crs/5200",
                        "@rel": "self"
                    }
                },
                "summary": "teste p1",
                "type": {
                    "@id": "181",
                    "@REL_ATTR": "P",
                    "@COMMON_NAME": "Problema",
                    "link": {
                        "@href": "http://mctycasm-d-app:8050/caisd-rest/crt/181",
                        "@rel": "self"
                    }
                }
            }
        ]
    }
}

function run(zsearchTicketBody) {
    // let zobject = JSON.parse(zsearchTicketBody);
    let zcrArray = zsearchTicketBody.collection_cr.cr;

    let result = {};

// Constroi variáveis dinamicamente com nomenclatura diferente conforme o tamanho de um array

    let zobj = {};
    for (let i = 0; i < zcrArray.length; i++) {
        eval("zobj.obj"+i+ "= {}" );
    }
    
// fim testes

    // let zobj = {
    //     obj1: { 'id': '1', 'title': 'a' },
    //     obj2: { 'id': '2', 'title': 'b' },
    //     obj3: { 'id': '3', 'title': 'c' }
    // };
    console.log(zobj);

    let n = 0;
    for (let key in zobj) {
        result[n] = zcrArray[n];
        zobj[key].id = result[n]['@COMMON_NAME'];
        zobj[key].title = result[n].summary;
        n++;
    }

    // console.log(result[0]['@id']);
    console.log(zcrArray.length);
    console.log(zobj.obj1.title);
    // return result;
}

run(zsearchTicketBody);
