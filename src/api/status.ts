const lang = localStorage.getItem("lang") || "en";
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  ACCEPTED: 202,
  CLIENT_ERROR: 400,
  AUTHENTICATE: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
};

// en: 英语  zh: 中文 it: 意大利语 np：尼迫尔语 hi: 印度语 ko：韩语 es: 西班牙语 pt: 葡萄牙语
export const HTTP_TEXT = {
  zh: {
    OK: "200 - 請求成功",
    CREATED: "201 - 請求已創建",
    ACCEPTED: "202 - 請求已接受",
    CLIENT_ERROR: "400 - 錯誤請求! ",
    AUTHENTICATE: "401 - 用戶沒有權限！",
    FORBIDDEN: "403 - 拒絕訪問！",
    NOT_FOUND: "404 - 請求錯誤，未找到該資源！",
    SERVER_ERROR: "500 - 服務器出現錯誤，請檢查服務器！",
    BAD_GATEWAY: "502 - 網關錯誤！",
    SERVICE_UNAVAILABLE: "503 - 服務不可用，有時間暫停或維護！",
    GATEWAY_TIMEOUT: "504 - 連接超時！",
    TIMEOUT: "請求超時，請稍等重試！",
    NETWOEK: "請求失敗，請檢查網絡連接",
    UNKNOWN: "未知錯誤",
  },
  en: {
    OK: "Success",
    CREATED: "Created",
    ACCEPTED: "Accepted",
    CLIENT_ERROR: "Bad request!",
    AUTHENTICATE: "Unauthorized",
    FORBIDDEN: "Forbidden",
    NOT_FOUND: "Not Found",
    SERVER_ERROR: "Internal Server Error",
    BAD_GATEWAY: "Bad Gateway",
    SERVICE_UNAVAILABLE: "Service Unavailable",
    GATEWAY_TIMEOUT: "Gateway Timeout",
    TIMEOUT: "Timeout",
    NETWOEK: "Request failed, please check network connection",
    UNKNOWN: "Unknown mistake",
  },
  // it: {
  //   OK: "Richiesta eseguita",
  //   CREATED: "Richiesta creata",
  //   ACCEPTED: "Richiesta accettata",
  //   CLIENT_ERROR: "Richiesta non valida!",
  //   AUTHENTICATE: "L’utente non dispone dell’autorizzazione!",
  //   FORBIDDEN: "Accesso negato!",
  //   NOT_FOUND: "Richiesta non valida, risorsa non trovata!",
  //   SERVER_ERROR: "Errore del server, verificare il server!",
  //   BAD_GATEWAY: "Errore gateway non valido!",
  //   SERVICE_UNAVAILABLE:
  //     "Il servizio non è disponibile. È il momento per una pausa o per la manutenzione!",
  //   GATEWAY_TIMEOUT: "Connessione scaduta!",
  //   TIMEOUT: "Richiesta scaduta, attendere e riprovare!",
  //   NETWOEK: "Richiesta non riuscita, controllare la connessione di rete",
  //   UNKNOWN: "Errore sconosciuto",
  // },
  np: {
    OK: "अनुरोध सफल भयो",
    CREATED: "अनुरोध सिर्जना गरियो",
    ACCEPTED: "अनुरोध स्वीकार गरियो",
    CLIENT_ERROR: "खराब अनुरोध!",
    AUTHENTICATE: "उक्त प्रयोगकर्तालाई अनुमति दिइएको छैन!",
    FORBIDDEN: "पहुँच इन्कार गरियो!",
    NOT_FOUND: "खराब अनुरोध, उक्त स्रोत भेटिएन!",
    SERVER_ERROR: "सर्बरमा समस्या, कृपया सर्बर जाँच गर्नुहोस्!",
    BAD_GATEWAY: "खराब गेटवे समस्या!",
    SERVICE_UNAVAILABLE: "यो सेवा उपलब्ध छैन यो समय स्थगन वा मर्मतको लागि हो!",
    GATEWAY_TIMEOUT: "कनेक्सनको समय सकियो!",
    TIMEOUT: "अनुरोधको समय सकियो, कृपया पर्खनुहोस् र पुन: प्रयास गर्नुहोस्!",
    NETWOEK: "अनुरोध असफल भयो, कृपया तपाईंको नेटवर्क कनेक्सन जाँच गर्नुहोस्",
    UNKNOWN: "अज्ञात समस्या",
  },
  hi: {
    OK: "अनुरोध सफल रहा",
    CREATED: "अनुरोध सृजित",
    ACCEPTED: "अनुरोध स्वीकृत",
    CLIENT_ERROR: "खराब अनुरोध!",
    AUTHENTICATE: "उपयोगकर्ता के पास अनमति नहीं है!",
    FORBIDDEN: "एक्सेस अस्वीकृत!",
    NOT_FOUND: "खराब अनुरोध, संसाधन नहीं मिला!",
    SERVER_ERROR: "सर्वर त्रुटि, कृपया सर्वेर को जाँचें!",
    BAD_GATEWAY: "खराब गेटवे त्रुटि!",
    SERVICE_UNAVAILABLE:
      "सेवा उपलब्ध नहीं है। यह निलंबन या रखरखाव के लिए समय है!",
    GATEWAY_TIMEOUT: "कनेक्शन का समय समाप्त!",
    TIMEOUT: "अनुरोध का समय समाप्त, कृपया प्रतीक्षा करें और पुनः प्रयास करें!",
    NETWOEK: "अनुरोध विफल हुआ, कृपया अपने नेटवर्क कनेक्शन को जाँचें",
    UNKNOWN: "अज्ञात त्रुटि",
  },
  ko: {
    OK: "요청 성공함",
    CREATED: "요청 생성됨",
    ACCEPTED: "요청 수락됨",
    CLIENT_ERROR: "잘못된 요청!",
    AUTHENTICATE: "사용자는 권한이 없습니다!",
    FORBIDDEN: "요청이 거절되었습니다!",
    NOT_FOUND: "잘못된 요청, 리소스를 찾을 수 없습니다!",
    SERVER_ERROR: "서버 오류, 서버를 확인하세요!",
    BAD_GATEWAY: "잘못된 게이트웨이 오류!",
    SERVICE_UNAVAILABLE:
      "서비스가 이용 가능하지 않습니다. 연기 또는 유지관리를 할 시간입니다!",
    GATEWAY_TIMEOUT: "연결 시간 초과!",
    TIMEOUT: "요청 시간 초과, 기다린 후 다시 시도하세요!",
    NETWOEK: "요청 실패, 네트워크 연결을 확인하세요",
    UNKNOWN: "알 수 없는 오류",
  },
  es: {
    OK: "Solicitud correcta",
    CREATED: "Solicitud creada",
    ACCEPTED: "Solicitud aceptada",
    CLIENT_ERROR: "¡Mala solicitud!",
    AUTHENTICATE: "¡El usuario no tiene permiso!",
    FORBIDDEN: "¡Acceso denegado!",
    NOT_FOUND: "¡Acceso denegado!",
    SERVER_ERROR: "Error del servidor, compruebe el servidor.",
    BAD_GATEWAY: "¡Error de puerta de enlace incorrecta!",
    SERVICE_UNAVAILABLE:
      "El servicio no está disponible. ¡Es hora de la suspensión o del mantenimiento!",
    GATEWAY_TIMEOUT: "¡El tiempo de conexión ha caducado!",
    TIMEOUT: "Solicite tiempo de espera, espere y vuelva a intentarlo.",
    NETWOEK: "Solicitud fallida, compruebe su conexión de red",
    UNKNOWN: "Error desconocido",
  },
  pt: {
    OK: "Solicitação concluída com sucesso",
    CREATED: "Solicitação criada!",
    ACCEPTED: "Solicitação aceita!",
    CLIENT_ERROR: "Solicitação incorreta!",
    AUTHENTICATE: "O usuário não tem permissão!",
    FORBIDDEN: "Acesso negado!",
    NOT_FOUND: "Solicitação incorreta, recurso não encontrado!",
    SERVER_ERROR: "Erro do servidor, verifique o servidor!",
    BAD_GATEWAY: "Erro de gateway incorreto!",
    SERVICE_UNAVAILABLE:
      "O serviço não está dispo]nível. É hora de suspensão ou manutenção!",
    GATEWAY_TIMEOUT: "Tempo de conexão esgotado!",
    TIMEOUT: "Tempo de solicitação esgotado, aguarde e tente novamente!",
    NETWOEK: "Falha na solicitação, verifique sua conexão de rede",
    UNKNOWN: "Erro desconhecido",
  },
};

export const getHttpStatusText = function (
  code: number | null,
  err?: any
): string {
  
  if (err && err.response && err.response.status) {
    code = err.response.status;
  }
  for (const key in HTTP_STATUS) {
    if (HTTP_STATUS[key] === code) {
      const text = HTTP_TEXT[lang];
      if(text === undefined) return HTTP_STATUS[lang].UNKNOWN;
      return text;
    }
  }
  
  if ((typeof err ==='object'&& err.message.indexOf("500") > -1)||err?.indexOf("500")>-1 ) {
    return HTTP_TEXT[lang].SERVER_ERROR;
  }
  if (typeof err === "object" && err.message.indexOf("timeout") > -1) {
    return HTTP_TEXT[lang].TIMEOUT;
  }

  if (typeof err === "object" && err.message.indexOf("Network") > -1) {
    return HTTP_TEXT[lang].NETWOEK;
  }
  
  return HTTP_TEXT[lang].UNKNOWN;
};
