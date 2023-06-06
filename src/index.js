window.onload = () => {
  const notificationTemplate = document.querySelector("#notification");
  const notificationsSection = document.querySelector("#notifications-section");
  const showNotificationButton = document.querySelector("button");
  const notificationSound = new Audio("/sounds/notification.wav");

  showNotificationButton.addEventListener("click", () => {
    const notificationId = `notification-${Date.now()}`;
    const newNotification = notificationTemplate.content.cloneNode(true);
    const dialog = newNotification.querySelector("dialog");
    dialog.id = notificationId;

    dialog.addEventListener("close", (ev) => {
      setTimeout(() => {
        ev.target.remove();
      }, 700);
    });

    notificationsSection.appendChild(newNotification);
    notificationSound.play();

    setTimeout(() => {
      document.getElementById(notificationId).close();
    }, 5000);
  });
};
