

const initalUserState = {
  user: {
    name: "suren",
  },
};

export default function UserReduser(state = initalUserState, action) {
  switch (action.type) {
    case "edit-name":
      return {
        ...state,
       user:{
        ...state.user,
        name:action.paylaod
       }
      };
      default: return state
  }
}
