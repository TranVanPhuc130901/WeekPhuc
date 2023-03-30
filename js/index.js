//#region ẩn hiện đề xuất tìm kiếm searchBox
/**
 * hiện thanh đề xuát tìm kiếm khi ấn vào searchBox ở header
 */
$('.searchBox .search input').click(function(e) {
    e.preventDefault();
    $('.searchBox .layerSearch').show();

});
/**
 * ẩn thanh đề xuát tìm kiếm khi ấn vào searchBox ở header
 */
$(document).on('click', function(e) {
    if (!$(e.target).closest('.searchBox').length) {
        $('.searchBox .layerSearch').hide();
    }

});
//#endregion

//#region Ẩn hiện form đăng khi đăng nhập và quên mật khẩu
/// hiện login khi bấm đăng nhập
$('.btn_login').click(function(e) {
    e.preventDefault();
    $('.layerLogin').addClass('active');
});

/// ẩn ô login khi ấn ra ngoài vùng có box đăng nhập

$('.layerLogin').click(function(e) {
    if ($(e.target).hasClass('layerLogin')) {
        $('.layerLogin').removeClass('active');
    }
});

/// hiện form đăng kí khi ấn vào đăng kí ngay ở form đăng nhập và quên mật khẩu

$('.link.btRegister ').click(function(e) {
    e.preventDefault();
    $('.layerRegester').addClass('active');
    $('.layerLogin').removeClass('active');
    $('.layerForgot').removeClass('active');
})

/// ẩn ô regester khi ấn ra ngoài vùng có box đăng nhập

$('.layerRegester').click(function(e) {
    if ($(e.target).hasClass('layerRegester')) {
        $('.layerRegester').removeClass('active');
    }
});

/// hiện form đăng nhập khi bấm vào đăng nhập ở form đang kí

$('.link.btlogin').click(function(e) {
    e.preventDefault();
    $('.layerRegester').removeClass('active');
    $('.layerLogin').addClass('active');
})

/// hiện form Forgot khi bấm vào quên mật khẩu

$('.link.btForgot').click(function(e) {
    e.preventDefault();
    $('.layerForgot').addClass('active');
    $('.layerLogin').removeClass('active');
})

/// ẩn form Forgot

$('.layerForgot').click(function(e) {
    if ($(e.target).hasClass('layerForgot')) {
        $('.layerForgot').removeClass('active');
    }
});

/// hiện login khi ấn đăng nhập ở form forgot

$('.link.btForgotLogin ').click(function(e) {
    e.preventDefault();
    $('.layerForgot').removeClass('active');
    $('.layerLogin').addClass('active');
})


// show và hide password

$('.iconPs').click(function(e) {
    e.preventDefault();
    let input = $(this).siblings('input')
    let attInput = input.attr('type');
    if (attInput == 'password') {
        $(input).attr('type', 'text')
        $(this).css('background', 'url(../image/icon/icon_eye.svg) no-repeat center center')
    } else {
        $(input).attr('type', 'password')
        $(this).css('background', 'url(../image/icon/icon_eye_del.svg) no-repeat center center')
    }
});



$('.wInputPassword .showPassword').click(function(e) {
        e.preventDefault();
        let input = $(this).siblings('input');
        let attInput = input.attr('type');
        if (attInput == 'password') {
            $(input).attr('type', 'text');
            $(this).css('background', 'url(../image/icon/icon_eye.svg) no-repeat center center')
        } else {
            $(input).attr('type', 'password')
            $(this).css('background', 'url(../image/icon/icon_eye_del.svg) no-repeat center center')
        }
    })
    //#endregion

//#region ẩn hiện danh mục
/// thêm active khi bấm vào các danh mục
$('.itemBlog').click(function(e) {
    e.preventDefault();
    $('.itemBlog.active').removeClass('active');
    $(this).addClass('active');

});

// mobile
$('.itemBlog').click(function(e) {
    e.preventDefault();
    $('.itemBlog.activeMb').removeClass('activeMb');
    $(this).addClass('activeMb');

});

//#endregion

//#region cập nhật thông tin vào ô input


/// ẩn hiện form thông tin khách đặt chỗ
$('#guest').click(function(e) {
    e.preventDefault();
    $('#guestBox').addClass('active')
});

$(document).click(function(event) {
    if (!$(event.target).closest('#guestInput').length) {
        $('#guestBox').removeClass('active');
    }
});

/// cập nhật số lượng người lớn, trẻ em và thú cưng tham gia

$('#guestBox .frame .inputNumber button').click((e) => {
    e.preventDefault();
    let input = $(e.target).siblings("input");
    let value = parseInt(input.val());
    if ($(e.target).hasClass('add')) {
        input.val(value + 1);
    } else if ($(e.target).hasClass('sub')) {
        if (value > 1) {
            input.val(value - 1)
        }
    }

    UpdateGuestText();
})

/// add thêm text vào ô input

function UpdateGuestText() {
    let adult = $('#guestBox .frame:nth-child(1) .inputNumber input').val();
    let child = $('#guestBox .frame:nth-child(2) .inputNumber input').val();
    let pet = $('#guestBox .frame:nth-child(3) .inputNumber input').val();

    let guestText = '';

    if (adult > 0) {
        guestText += adult + " Người lớn"
    }
    if (child > 0) {
        guestText += (guestText ? " , " : "") + child + " Trẻ em"
    }
    if (pet > 0) {
        guestText += (guestText ? " , " : "") + pet + " Thú cưng"
    }

    $('#guest').val(guestText)
}

//#endregion

//#region carousel
// Vuốt trên màn hình di động và máy tính bảng

// /// khaibaos để lưu trữ tọa độ x và y của tọa dộ điểm bắt đầu cử chỉ vuốt
// let xDown = null;
// let yDown = null;

// /// gắn touchStart và class carousel

// jQuery(".carousel").on("touchstart", function(evt) {
//     /// lưu tọa độ x và y cảu điểm bắt đầu
//     xDown = evt.touches[0].clientX;
//     yDown = evt.touches[0].clientY;

//     console.log('Bắt dầu ' + xDown, yDown);
// });
// /// gắn sự kiện touchEnd vào carousel
// jQuery(".carousel").on("touchend", function(evt) {
//     if (!xDown || !yDown) {
//         return;
//     }
//     /// tính toán điểm kết thức để tính toán khoảng cách giữa chúng và xác định xem là vuốt sang trái hay phải
//     const xUp = evt.changedTouches[0].clientX;
//     const yUp = evt.changedTouches[0].clientY;

//     console.log('Kết thúc ' + xUp, yUp);

//     /// lấy tọa độ bắt đầu trừ đi tọa độ kết thúc
//     const xDiff = xDown - xUp;
//     const yDiff = yDown - yUp;
//     // nếu khoảng cách ngang xDiff > yDiff thì là cử chỉ vuốt theo hướng ngang
//     if (Math.abs(xDiff) > Math.abs(yDiff)) {
//         // nếu xDiff > là vuốt sang trái
//         if (xDiff > 0) {
//             // Vuốt sang trái
//             const n = jQuery(".carousel");
//             const i = n.width() / 2;
//             const r = n.get(0).scrollLeft;
//             const t = n.get(0).scrollWidth;
//             if (r + n.width() !== t) {
//                 n.animate({
//                     scrollLeft: `+=${i}px`
//                 }, function() {
//                     jQuery(".carousel-prev").show(0);
//                     n.get(0).scrollLeft + n.width() === t && jQuery(".carousel-next").hide(0)
//                 });
//             }
//         } else {
//             // Vuốt sang phải
//             const n = jQuery(".carousel");
//             const i = n.width() / 2;
//             const r = n.get(0).scrollLeft;
//             if (r !== 0) {
//                 n.animate({
//                     scrollLeft: `-=${i}px`
//                 }, function() {
//                     jQuery(".carousel-next").show(0);
//                     n.get(0).scrollLeft === 0 && jQuery(".carousel-prev").hide(0)
//                 });
//             }
//         }
//     }

//     xDown = null;
//     yDown = null;
// });


/// carousel pb, laptop
jQuery(".carousel-prev").click(function() {
    // khai báo biến n là phần tử có class carolsel
    const n = jQuery(".carousel"),
        // tính giá trị của t bằng chiều rộng của n / 3(chiều rộng carousel/3)
        t = n.width() / 3,
        // lưu giá trị vị trí hiện tại của phần tử carousel
        i = n.get(0).scrollLeft,
        // lưu giá trị là chiều rộng của toàn carousel vào r
        r = n.get(0).scrollWidth;
    // nếu vị trí hiện tại không phải là 0 thì sẽ chuyển phần tử carousek sang trái t pixel
    i !== 0 && n.animate({
        // dụng animate để tạo hiệu ứng mượt mà
        scrollLeft: `-=${t}px`
    }, function() {
        // ẩn hiện các phần tử carousel-next hoặc carousel-prev
        jQuery(".carousel-next").show(0);
        n.get(0).scrollLeft === 0 && jQuery(".carousel-prev").hide(0)
    })
    console.log(t, i, r);
});

jQuery(".carousel-next").click(function() {
    const n = jQuery(".carousel"),
        i = n.width() / 3,
        r = n.get(0).scrollLeft,
        t = n.get(0).scrollWidth;
    r + n.width() !== t && n.animate({
        scrollLeft: `+=${i}px`
    }, function() {
        jQuery(".carousel-prev").show(0);
        n.get(0).scrollLeft + n.width() === t && jQuery(".carousel-next").hide(0)
    })
    console.log(t, i, r);
});
//#endregion


$('.menu_mbBtn').click(function(e) {
    e.preventDefault();
    $('.menuPopupMb').toggle();
    $('.popup').removeClass('active')
});


$('.btLoginMb').click(function(e) {
    e.preventDefault();
    $('.layerLogin').toggleClass('active')
    $('.menuPopupMb').removeClass('active');
});



$(".weMoreInfoPrice .siteOption .options").each(function() {
    var $groups = $(this).find(".groups");
    var $items = $groups.find(".item");
    var itemCount = $items.length;

    if (itemCount > 3) {
        $(this).find(".moreOption").addClass('active');
        $($items).slice(4).css('display', 'none');
    } else {
        $(this).find(".moreOption").removeClass('active')
    }
});


//#region updateInfoUser



$('.btnUpdate').click(function(e) {
    e.preventDefault();
    let dt = $(this).attr('data')
    switch (dt) {
        case 'textName':
            $('.popupUpdateText .titleUpdate').text('Họ tên');
            $('.popupUpdateText .descUpdate').text('Tên trên chứng minh thư, hộ chiếu, hoặc giấy phép lái xe của bạn');
            $('.popupUpdateText').addClass('active')
            $('.popupUpdateText .weInput input').focus()
            break;
        case 'textPhone':
            $('.popupUpdateText .titleUpdate').text('Số điện thoại');
            $('.popupUpdateText .descUpdate').text('');
            $('.popupUpdateText .weInput label').text('Số điện thoại');
            $('.popupUpdateText').addClass('active')
            $('.popupUpdateText .weInput input').focus()
            break;
        case 'textEmail':
            $('.popupUpdateText .titleUpdate').text('Email');
            $('.popupUpdateText .descUpdate').text('');
            $('.popupUpdateText .weInput label').text('Email của bạn');
            $('.popupUpdateText').addClass('active')
            $('.popupUpdateText .weInput input').focus()
            break;
        case 'gender':

            $('.popupUpdateGender').addClass('active')
            break;
        case 'date':

            $('.popupUpdateUser').addClass('active')
            $('.popupUpdateUser .weInput input').focus()
            break;
    }
});


$('.backdrop').click(function(e) {
    if ($(e.target).hasClass('backdrop')) {
        $('.backdrop').removeClass('active');

    }
})

$('.botUpdate .cancel').click(function(e) {

    $('.backdrop').removeClass('active');


})

//#endregion