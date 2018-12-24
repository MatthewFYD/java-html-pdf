import axios from "../plugins/module1/axios"

export const state = () => ({
  data: {
    id:"",
    name: "",
    mobile: "",
    birthday: null,
    gender: "",
    bloodGroup: "",
    rhAntigen: "",
    subhealthCode: "",
    salesName: "",
    companyName: "",
    createdTime: null,
    focusDisease: [{
      diseaseName: "",
      detail: "",
      value: "",
      riskLevel: 0,
    }],
    riskValueMap: {
      riskValue3: 0,
      riskValue4: 0,
      riskValue5: 0,
      riskValue6: 0,
      riskValue7: 0,
      riskValue8: 0,
      riskValue9: 0,
      riskValue10: 0,
      riskValue11: 0,
      riskValue3Class: {
        level1: false,
        level2: false,
        level3: false,
        level4: false,
      },
      riskValue4Class: {
        level1: false,
        level2: false,
        level3: false,
        level4: false,
      },
      riskValue5Class: {
        level1: false,
        level2: false,
        level3: false,
        level4: false,
      },
      riskValue6Class: {
        level1: false,
        level2: false,
        level3: false,
        level4: false,
      },
      riskValue7Class: {
        level1: false,
        level2: false,
        level3: false,
        level4: false,
      },
      riskValue8Class: {
        level1: false,
        level2: false,
        level3: false,
        level4: false,
      },
      riskValue9Class: {
        level1: false,
        level2: false,
        level3: false,
        level4: false,
      },
      riskValue10Class: {
        level1: false,
        level2: false,
        level3: false,
        level4: false,
      },
      riskValue11Class: {
        level1: false,
        level2: false,
        level3: false,
        level4: false,
      },
    },
    diseaseItemListMap: {
      SYSTEM_FOCUS_3: [{
        diseaseName: "",
        detail: "",
        value: "",
        riskLevel: 0,
      }],
      SYSTEM_FOCUS_4: [],
      SYSTEM_FOCUS_5: [],
      SYSTEM_FOCUS_6: [],
      SYSTEM_FOCUS_7: [],
      SYSTEM_FOCUS_8: [],
      SYSTEM_FOCUS_9: [],
      SYSTEM_FOCUS_10: [],
      SYSTEM_FOCUS_11: [],
      ALERT_3: [{
        diseaseName: "",
        detail: "",
        value: "",
        riskLevel: 0,
      }],
      ALERT_4: [],
      ALERT_5: [],
      ALERT_6: [],
      ALERT_7: [],
      ALERT_8: [],
      ALERT_9: [],
      ALERT_10: [],
      ALERT_11: [],
      ORGAN_3: [{
        organName: "",
        value: 0,
        riskLevel: 0,
      }],
      ORGAN_4: [],
      ORGAN_5: [],
      ORGAN_6: [],
      ORGAN_7: [],
      ORGAN_8: [],
      ORGAN_9: [],
      ORGAN_10: [],
      ORGAN_11: [],
      BIOCHEMISTRY_3: [{
        diseaseName: "",
        detail: "",
        value: 0,
        itemDValue:0,
        riskLevel: 0,
      }],
      BIOCHEMISTRY_4: [],
      BIOCHEMISTRY_5: [],
      BIOCHEMISTRY_6: [],
      BIOCHEMISTRY_7: [],
      BIOCHEMISTRY_8: [],
      BIOCHEMISTRY_9: [],
      BIOCHEMISTRY_10: [],
      BIOCHEMISTRY_11: [],
    },

  },
})

export const mutations = {
  SET_DATA(state, data) {
    state.data = data;
    for (let i = 3; i <= 11; i++) {
      let number = state.data.riskValueMap["riskValue" + i];
      if (number <= 25) {
        state.data.riskValueMap["riskValue" + i + "Class"] = {
          level1: true
        };
      } else if (number <= 50) {
        state.data.riskValueMap["riskValue" + i + "Class"] = {
          level2: true
        };
      } else if (number <= 75) {
        state.data.riskValueMap["riskValue" + i + "Class"] = {
          level3: true
        };
      } else if (number <= 100) {
        state.data.riskValueMap["riskValue" + i + "Class"] = {
          level4: true
        };
      }
    }
  }
}

export const actions = {
  async GET_DATA({commit}, id) {
    const {data} = await axios.get('/pdfData/module1Page2/'+id)
    commit('SET_DATA', data)
  }
}
