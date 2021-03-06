import { MethodFirstParamFactory, getModelHelpers } from "@tredux/tredux"

export class __Template__State {
}

type MethodFirstParam = MethodFirstParamFactory<__Template__State, __Template__Methods>

export class __Template__Methods {
  __example__ = ({}: MethodFirstParam) => {
  }
}


export const Model__Template__ = '__Template__'
const helper = getModelHelpers<__Template__State, __Template__Methods>(Model__Template__)
export const useModel__Template__State = helper.useModelState
export const updateModel__Template__ = helper.updateModel
export const dispatchModel__Template__ = helper.dispatchModel
export const getModel__Template__State = helper.getModelState

export default {
  name: Model__Template__,
  state: new __Template__State(),
  methods: new __Template__Methods()
}