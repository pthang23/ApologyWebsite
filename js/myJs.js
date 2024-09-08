header1 = "Đầu tiên là về chuyện hôm qua"
apology1 = "Trước tiên, anh muốn <b>xin lỗi</b>. Anh đã phản ứng thái quá, và làm em tổn thương. Anh thật lòng xin lỗi về chuyện này."
apology2 = "Nhưng thực sự là anh cũng rất buồn, nhưng chỉ với bộ quần áo không chụp trước thì anh không buồn lắm đâu, nhưng đến lúc em đòi đổi avatar thì anh buồn lắm ấy. Em đang đi chơi xa, xong tự nhiên muốn đổi avatar, mà rõ ràng avatar thì lúc nào cũng nhìn thấy, còn cover thì khi nào vào nick mới nhìn thấy thôi mà. Với một đứa hay bị lo lắng như anh, anh buồn và suy nghĩ nhiều lắm chứ."
header2 = "Tiếp theo là về chuyện tương lai"
breakup1 = "Hôm đó anh bảo nếu em muốn yêu người khác thì chia tay, em cũng đồng ý rồi. Tối đó anh sốt cao, đi ra ngoài mưa bão đổ cả cây đăng story mà em chả rep gì cả, thực sự buồn lắm, lỡ anh bị làm sao thì em có còn quan tâm nữa không, anh không biết nữa, anh chỉ sợ câu trả lời là không. Anh thấy, và anh sợ thật ra em không còn thương anh nữa."
breakup2 = "Anh thấy tính cách chúng ta trái ngược nhiều cực, anh thấy khi không ở bên cạnh anh, em bình yên, vui vẻ hơn. Hôm trước anh bảo em là <b>muốn tìm người khác thì chia tay</b>, còn em bảo là <b>nếu anh muốn thì mình chia tay</b>, ... chúng ta cuối cùng vẫn chưa thật sự rõ ràng với nhau điều gì. Anh mong muốn một câu trả lời rõ ràng từ em, anh không muốn phải kết thúc trong dở dang, dù gì mình cũng đã có 2 năm bên nhau hạnh phúc mà nhỉ?"
header3 = "Vậy em có đồng ý chia tay anh không?"
note = "Nếu em ấn nhấn vào đồng ý, anh sẽ lập tức block em, xóa tất cả ảnh của chúng mình trong máy, trên mạng, chúng mình sẽ thật sự kết thúc mà không chút vướng bận nào ạ, anh hứa!"
option1 = "Đồng ý"
option2 = "Còn lâu"

const textConfig = {
  text1: "Chào em!",
  text2: "Anh có đôi lời (có thể là cuối cùng) muốn nói, nghe hết nhé?",
  text3: header1,
  text4: apology1,
  text5: apology2,
  text3_2: header2,
  text4_2: breakup1,
  text5_2: breakup2,
  text3_3: header3,
  text4_3: note,
  text6: option1,
  text7: option2,
  text8: "Gửi điều gì đó đến anh",
  text9: "Gửi",
  text10: "Em nhớ anh",
  text11: "Anh biết mà, anh cũng nhớ em lắm",
  text12: "Tối nay mình call nha!",
  text13: "Đồng ý",
};

$(document).ready(function () {
  // process bar
  setTimeout(function () {
    firstQuestion();
    $(".spinner").fadeOut();
    $("#preloader").delay(350).fadeOut("slow");
    $("body").delay(350).css({
      overflow: "auto",
    });
  }, 600);

  $("#text3").html(textConfig.text3);
  $("#text4").html(textConfig.text4);
  $("#text5").html(textConfig.text5);
  $("#text3_2").html(textConfig.text3_2);
  $("#text4_2").html(textConfig.text4_2);
  $("#text5_2").html(textConfig.text5_2);
  $("#text3_3").html(textConfig.text3_3);
  $("#text4_3").html(textConfig.text4_3);
  $("#no").html(textConfig.text6);
  $("#yes").html(textConfig.text7);

  function firstQuestion() {
    $(".content").hide();
    Swal.fire({
      title: textConfig.text1,
      text: textConfig.text2,
      imageUrl: "img/test5.jpg",
      imageWidth: 545,
      imageHeight: 300,
      background: '#fff url("img/iput-bg.jpg")',
      imageAlt: "Custom image",
    }).then(function () {
      $(".content").show(200);
    });
  }

  // switch button position
  function switchButton() {
    var audio = new Audio("sound/duck.mp3");
    audio.play();
    var leftNo = $("#no").css("left");
    var topNO = $("#no").css("top");
    var leftY = $("#yes").css("left");
    var topY = $("#yes").css("top");
    $("#no").css("left", leftY);
    $("#no").css("top", topY);
    $("#yes").css("left", leftNo);
    $("#yes").css("top", topNO);
  }
  // move random button póition
  function moveButton() {
    var audio = new Audio("sound/Swish1.mp3");
    audio.play();
    if (screen.width <= 600) {
      var x = Math.random() * 300;
      var y = Math.random() * 500;
    } else {
      var x = Math.random() * 500;
      var y = Math.random() * 500;
    }
    var left = x + "px";
    var top = y + "px";
    $("#no").css("left", left);
    $("#no").css("top", top);
  }

  var n = 0;
  $("#no").mousemove(function () {
    if (n < 1) switchButton();
    if (n > 1) moveButton();
    n++;
  });
  $("#no").click(() => {
    if (screen.width >= 900) switchButton();
  });

  // generate text in input
  function textGenerate() {
    var n = "";
    var text = " " + textConfig.text10;
    var a = Array.from(text);
    var textVal = $("#txtReason").val() ? $("#txtReason").val() : "";
    var count = textVal.length;
    if (count > 0) {
      for (let i = 1; i <= count; i++) {
        n = n + a[i];
        if (i == text.length + 1) {
          $("#txtReason").val("");
          n = "";
          break;
        }
      }
    }
    $("#txtReason").val(n);
  }

  // show popup
  $("#yes").click(function () {
    var audio = new Audio("sound/tick.mp3");
    audio.play();
    Swal.fire({
      title: textConfig.text8,
      html: true,
      width: 900,
      padding: "3em",
      html: "<input type='text' class='form-control' id='txtReason'  placeholder='Nhất định phải gõ gì đó nhé'>",
      background: '#fff url("img/iput-bg.jpg")',
      backdrop: `
                    rgba(0,0,123,0.4)
                    url("img/giphy2.gif")
                    left top
                    no-repeat
                  `,
      showCancelButton: false,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonColor: "#fe8a71",
      cancelButtonColor: "#f6cd61",
      confirmButtonText: textConfig.text9,
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          width: 900,
          confirmButtonText: textConfig.text13,
          background: '#fff url("img/iput-bg.jpg")',
          title: textConfig.text11,
          text: textConfig.text12,
          confirmButtonColor: "#83d0c9",
          onClose: () => {
            window.location = "https://www.facebook.com/profile.php?id=100010286928327&locale=vi_VN";
          },
        });
      }
    });

    $("#txtReason").focus(function () {
      var handleWriteText = setInterval(function () {
        textGenerate();
      }, 10);
      $("#txtReason").blur(function () {
        clearInterval(handleWriteText);
      });
    });
  });
});
