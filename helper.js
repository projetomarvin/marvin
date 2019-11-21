let onlineId;
let url = 'https://api.projetomarvin.com/api/'

if (!window.location.host.includes('projetomarvin')) {
  url = 'https://localhost/api/'
}

function isOnline() {
  $.ajax({
    type: 'patch',
    url: url + 'students/' + localStorage.userId + '?access_token=' + localStorage.access_token,
    crossDomain: true,
    data: {
      availableUntil: new Date(new Date().getTime() + 60000)
    },
  })
}

function answerCorrectionInvite(answer, id) {
  $.ajax({
    type: 'put',
    url: url + 'studentActivities/' + id + '/answerCorrectionInvite?access_token=' + localStorage.access_token,
    data: {answer},
    crossDomain: true,
    success: function (res) {
      console.log(res);
    },
    error: function (res, txt) {
      alert(res.responseJSON.error.message);
    }
  })
}

if (localStorage.access_token) {
  isOnline();
  onlineId = setInterval(isOnline, 30*1000);
  setInterval(level, 15*60*1000);
}

function level() {
  $.ajax({
    url: url + 'students/' + localStorage.userId + '/levelLogs?access_token=' + localStorage.access_token,
    type: 'post',
    crossDomain: true,
    data: {
      student: JSON.parse(localStorage.user).username,
      level: JSON.parse(localStorage.user).activityNumber,
      hour: `${new Date().getHours()}:${new Date().getMinutes()}`,
      date: `${new Date().getDate()}/${new Date().getMonth() + 1}/${new Date().getFullYear()}`,
    },
  })
}
