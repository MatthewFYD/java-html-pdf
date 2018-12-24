import axios from "../plugins/module1/axios"
import {getTableText, getTextLine} from "../plugins/module1/tools";

export const state = () => ({
  data: {
    id:"",
    name: "",
    mobile: "",
    packageGroupName: "",
    companyName: "",
    salesName: "",
    jzcode: "",
    geneCode: "",
    subhealthCode: "",
    createdTime: "",
    pkgExamType: "",
    diseaseType: "",
    geneRisk: [],
    geneRisk1: [],
    geneRisk2: [],
    subhealthRisk: [],
    subhealthRisk1: [],
    subhealthRisk2: [],
    jzexamAdvicePrjGroupVoList: [],
    jzexamAdvicePrjGroupVoListGroup: [],
    pageNoSize: 7,
  }
})

export const mutations = {
  SET_DATA(state, data) {
    state.data = data;
    state.data.pageNoSize = 7;

    state.data.geneRisk1 = [];
    state.data.geneRisk2 = [];
    for (let i = 0; i < 5 && i < state.data.geneRisk.length; i++) {
      state.data.geneRisk1.push(state.data.geneRisk[i]);
    }
    for (let i = 5; i < 10 && i < state.data.geneRisk.length; i++) {
      state.data.geneRisk2.push(state.data.geneRisk[i]);
    }

    state.data.subhealthRisk1 = [];
    state.data.subhealthRisk2 = [];
    for (let i = 0; i < 5 && i < state.data.subhealthRisk.length; i++) {
      state.data.subhealthRisk1.push(state.data.subhealthRisk[i]);
    }
    for (let i = 5; i < 10 && i < state.data.subhealthRisk.length; i++) {
      state.data.subhealthRisk2.push(state.data.subhealthRisk[i]);
    }

    state.data.jzexamAdvicePrjGroupVoListGroup = [];
    let jzexamAdvicePrjGroupVoList = []
    state.data.jzexamAdvicePrjGroupVoListGroup.push(jzexamAdvicePrjGroupVoList)

    let titleHeight = 24.5
    let maxPageHeight = 560
    let paddingHeight = 6
    let textLineHeight = 14.5

    let currentPageHeight = titleHeight

    for (let item of state.data.jzexamAdvicePrjGroupVoList) {
      let currentLine = Math.max(Math.ceil(getTextLine(item.hcitemCategory2, 156)), Math.ceil(getTextLine(item.hcitemName, 311)))
      item.hcitemCategory2 = getTableText(item.hcitemCategory2, 156)
      item.hcitemName = getTableText(item.hcitemName, 311)
      let currentHeight = paddingHeight + (textLineHeight * currentLine)
      if (currentPageHeight + currentHeight > maxPageHeight) {
        currentPageHeight = titleHeight + currentHeight
        jzexamAdvicePrjGroupVoList = [];
        state.data.jzexamAdvicePrjGroupVoListGroup.push(jzexamAdvicePrjGroupVoList);
      } else {
        currentPageHeight += currentHeight
      }
      jzexamAdvicePrjGroupVoList.push(item);
    }
    state.data.pageNoSize += state.data.jzexamAdvicePrjGroupVoListGroup.length;
  }
}

export const actions = {
  async GET_DATA({commit}, id) {
    const {data} = await axios.get('/pdfData/module1Page1/'+id)
    commit('SET_DATA', data)
  }
}
