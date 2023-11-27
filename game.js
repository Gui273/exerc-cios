$(document).ready(function() {
    // Gerar um número aleatório entre 1 e 10
    var secretNumber = Math.floor(Math.random() * 10) + 1;
    var attempts = 0;

    $("#submitGuess").on("click", function() {
        // Obter o palpite do jogador
        var guess = $("#guessInput").val();

        // Validar o palpite
        if (guess !== "" && !isNaN(guess)) {
            attempts++;

            // Verificar se o palpite está correto
            if (parseInt(guess) === secretNumber) {
                $("#message").text("Parabéns! Você acertou em " + attempts + " tentativas.");
                $("#message").css("color", "green");
                $("#guessInput").prop("disabled", true);
                $("#submitGuess").prop("disabled", true);
            } else {
                var hint = guess > secretNumber ? "Tente um número menor." : "Tente um número maior.";
                $("#message").text("Tentativa #" + attempts + ": " + hint);
                $("#message").css("color", "red");
            }
        } else {
            $("#message").text("Por favor, insira um número válido.");
            $("#message").css("color", "red");
        }
    });
});
