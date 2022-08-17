const socket = io();

////////// ///////////////////////////////////
const messageForm = document.querySelector("#message-form");
const messageFormInput = document.querySelector("input");
const messageFormButton = document.querySelector("button");
const sendLocationButton = document.querySelector("#send-location");
const messages = document.querySelector("#messages");
const messageTemplate = document.querySelector("#message-template").innerHTML;
const locationMessageTemplate = document.querySelector(
  "#location-message-template"
).innerHTML;
const sidebarTemplate = document.querySelector("#sidebar-template").innerHTML;

////////// ///////////////////////////////////
const { username, room } = Qs.parse(location.search, {
  ignoreQueryPrefix: true,
});
////////// ///////////////////////////////////
const autoScroll = () => {
  // new message element
  const newMessage = messages.lastElementChild;

  // height of the new message
  const newMessageStyles = getComputedStyle(newMessage);
  const newMessageMargin = parseInt(newMessageStyles.marginBottom);
  const newMessageHeight = newMessage.offsetHeight + newMessageMargin;

  // Visible height
  const visibleHeight = messages.offsetHeight;

  // height of messages container
  const containerHeight = messages.scrollHeight;

  // scroll limit
  const scrollOffset = messages.scrollTop + visibleHeight;

  if (containerHeight - newMessageHeight <= scrollOffset) {
    messages.scrollTop = messages.scrollHeight;
  }
};
////////// ///////////////////////////////////

socket.on("message", (message) => {
  console.log(message);
  const html = Mustache.render(messageTemplate, {
    message: message.text,
    createdAt: moment(message.createdAt).format("h:mm a"),
  });
  messages.insertAdjacentHTML("beforeend", html);
  autoScroll();
});
////////// ///////////////////////////////////

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();
  // to disable the button after the message until it send
  messageFormButton.setAttribute("disabled", "disabled");

  // const message = document.querySelector("input").value;
  const message = e.target.elements.message.value;

  socket.emit("sendMessage", message, (error) => {
    messageFormButton.removeAttribute("disabled");
    //to make message empty after send it
    messageFormInput.value = "";
    messageFormInput.focus();

    if (error) console.log(error);
    console.log("the message was delivered");
  });
});

////////// ///////////////////////////////////
sendLocationButton.addEventListener("click", () => {
  if (!navigator.geolocation) {
    return alert("Geolocation is not supported by your browser");
  }

  sendLocationButton.setAttribute("disabled", "disabled");

  navigator.geolocation.getCurrentPosition((position) => {
    socket.emit(
      "sendLocation",
      {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      },
      () => {
        sendLocationButton.removeAttribute("disabled");

        console.log("Location shared");
      }
    );
  });
});
////////// ///////////////////////////////////
socket.on("locationMessage", (message) => {
  console.log(message);
  const html = Mustache.render(locationMessageTemplate, {
    username: message.username,
    message: message.text,
    url: message.url,
    createdAt: moment(message.createdAt).format("h:mm a"),
  });
  messages.insertAdjacentHTML("beforeend", html);
  autoScroll();
});
////////// ///////////////////////////////////
socket.on("roomData", ({ room, users }) => {
  const html = Mustache.render(sidebarTemplate, {
    room,
    users,
    // createdAt: moment(message.createdAt).format("h:mm a"),
  });
  document.querySelector("#sidebar").innerHTML = html;
});
////////// ///////////////////////////////////
socket.emit("join", { username, room }, (error) => {
  if (error) {
    alert(error);
    location.href = "/";
  }
});
////////// ///////////////////////////////////
//challenges
// socket.on("countUpdated", (count) => {
//   console.log("new web connection", count);
// });

// document.querySelector("#increment").addEventListener("click", () => {
//   console.log("clicked");
//   socket.emit("increment");
// });
