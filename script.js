document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll('.add_to_cart_button').forEach(button => {
        button.addEventListener("click", function(event) {
            event.preventDefault(); 
            
            let toaster = document.getElementById("cart-toaster");
            toaster.style.display = "block";
            toaster.style.opacity = "1"; 

            setTimeout(() => { 
                toaster.style.opacity = "0"; 
                setTimeout(() => {
                    toaster.style.display = "none"; 
                }, 300);
            }, 3000);
        });
    });
});