<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
<script src="assets/js/circle.js" type="text/javascript"></script>
<script src="assets/js/responsiveProductItem.js" type="text/javascript"></script>

<!-- <script>
    //navbar
    var dropdownItems = document.getElementsByClassName('megamenu')[0];

    function displayDropdown() {
        dropdownItems.classList.add('show');
    }

    function hideDropdown() {
        dropdownItems.classList.remove('show');
    }
</script> -->

<script>
    // about section
    var DetailParagraph = document.getElementsByClassName('hideDetailParagraph')[0];
    var aboutBtn = document.getElementsByClassName('aboutBtn')[0];
    DetailParagraph.style.display = "none";

    function showHiddenSection() {
        if (DetailParagraph.style.display === "none") {
            DetailParagraph.style.display = "block";
            aboutBtn.innerHTML = "View Less";
        } else {
            DetailParagraph.style.display = "none";
            aboutBtn.innerHTML = "View More";
            console.log(aboutBtn);
        }
    }
</script>

<script>
    //for product section second heading
    let heading = document.getElementById('headingColorChange');
    let headingContent = heading.innerText;
    var headingContentArray = headingContent.split(' ');
    var headingContentArrayExceptFirst = headingContentArray.slice(1).join(' ');
    newHeading = '<span>' + headingContentArray[0] + '</span> ' + headingContentArrayExceptFirst;
    heading.innerHTML = newHeading;
</script>

</body>

</html>