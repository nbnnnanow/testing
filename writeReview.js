let mainNav = document.getElementById("js-menu");
let navBarToggle = document.getElementById("js-nav-toggle");
navBarToggle.addEventListener("click", function() {
  mainNav.classList.toggle("active");
});

function getFile() {
  document.getElementById("photo").click();
}

// function previewFile() {
//   const preview = document.querySelector('#image');
//   const file = document.querySelector('input[type=file]').files[0];
//   const reader = new FileReader();

//   reader.addEventListener("load", function () {
//     // convert image file to base64 string
//     preview.src = reader.result;
//   }, false);

//   if (file) {
//     reader.readAsDataURL(file);
//   }
// }

function previewFiles() {

  var preview = document.querySelector('#image');
  var files   = document.querySelector('input[type=file]').files;

  function readAndPreview(file) {

    // Make sure `file.name` matches our extensions criteria
    if ( /\.(jpe?g|png|gif)$/i.test(file.name) ) {
      var reader = new FileReader();

      reader.addEventListener("load", function () {
        var image = new Image();
        image.height = 50;
        image.title = file.name;
        image.src = this.result;
        preview.appendChild( image );
      }, false);

      reader.readAsDataURL(file);
    }

  }

  if (files) {
    [].forEach.call(files, readAndPreview);
  }

  console.log(files);

}

function uploadImage() {
  const ref = firebase.storage().ref();
  const file_arr = document.querySelector("#photo").files;
  for (var i = 0; i < file_arr.length; i++) {
    var file = file_arr[i];
    const name = new Date() + "-" + file.name;
    const metadata = {
      contentType: file.type
    };
    const task = ref.child(name).put(file, metadata);
    task
      .then(snapshot => snapshot.ref.getDownloadURL())
      .then(url => {
        console.log(url);
        document.querySelector("#image").src = url;
      })
      .catch(console.error);
  }
}

// var image_ref_arr = new Array();
// function uploadImage() {
//     const ref = firebase.storage().ref();
//     const file_arr = document.querySelector("#photo").files;
//     for (var i=0; i < file_arr.length; i++){
//         var file = file_arr[i];
//         const name = new Date() + "-" + file.name;
//         const metadata = {
//             contentType: file.type
//         };
//         var task = ref.child(name).put(file, metadata);
//         task.then(snapshot => snapshot.ref.getDownloadURL())
//         .then(url => {
//             //TODO later ตอนนี้มันจะเอาแค่รูปสุดท้ายที่อัพเสร็จมาแสดง
//             document.querySelector("#image").src = url;
//             //OK
//             image_ref_arr.push(name);
//         }).
//         catch(console.error);
//     }
// }

// function addData(actName, attrName, textReview){
//     var actName = document.getElementById('actname').value;
//     var attrName = document.getElementById('attrname').value;
//     var textReview = document.getElementById('textreview').value;

//     if(actName != "" && attrName != "" && textReview != ""){
//         db.add({
//             activityName : actName,
//             touristattraction: attrName,
//             descriptionReview: textReview,
//             images : image_ref_arr
//         });

//         alert("กรอกข้อมูลสำเร็จ");
//     }else{
//         alert("กรุณากรอกให้ครบ");
//     }
// }


function addData(actName, attrName, textReview) {
  var actName = document.getElementById('actname').value;
  var attrName = document.getElementById('attrname').value;
  var textReview = document.getElementById('textreview').value;

  if (actName != "" && attrName != "" && textReview != "") {
      db.add({
       activityName: actName,
       touristAttraction: attrName,
       descriptionReview: textReview
   });

   alert("กรอกข้อมูลเสร็จเรียบร้อย!")
  }else{
      alert("กรุณากรอกข้อมูลให้ครบถ้วน")
  }

}