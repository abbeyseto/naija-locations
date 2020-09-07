var naija_data = require("./src/data.json");

module.exports = {
  all: function () {
    return naija_data;
  },
  states: function () {
    return naija_data.map(function (nigeriaStates) {
      return nigeriaStates.state;
    });
  },
  locals: function (state) {
    state = state.toLowerCase().trim();

    if (!state || state == "") {
      throw new Error("Invalid Nigeria State");
    }

    if (["fct", "f.c.t", "abuja", "f c t"].includes(state)) {
      state = "Federal Capital Territory";
    }

    return naija_data.find(function (nigeriaStates) {
      return nigeriaStates.state.name
        .toLowerCase()
        .trim()
        .includes(state.toLowerCase().trim())
    }).state.locals;
  },
};
