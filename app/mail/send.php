<?php

$settings = include('./settings.php');

print_r($_POST);

// отправка ответа на запрос
function sendResponse($isSuccess){
    echo json_encode([
        'result' => $isSuccess ? 'success' : 'error'
    ]);
}

// формирование тела письма
function createEmailTemplate($inputData){

    foreach ($inputData['mail'] as $item){
        $body .= "{$item['question']}\r\n{$item['answer']} \r\n\r\n";
    }

    return $body;
}


// проверка корректности запроса, и фильтрация вводных данных
function checkResponse(){
    $result['mail'] = [];

    foreach ($_POST['mail'] as $quizRow){
        $question = strip_tags($quizRow["question"]);
        $answer = strip_tags($quizRow["answer"]);
        $result['mail'][] = [
            'question' => $question,
            'answer' => $answer,
        ];
    }

    return $result;
}


// отсылка письма
$data = checkResponse();
if(!$data){
    sendResponse(false);
} else {
    $message = createEmailTemplate($data);
    sendResponse(mail($settings['address'], $settings['subject'], $message));
}