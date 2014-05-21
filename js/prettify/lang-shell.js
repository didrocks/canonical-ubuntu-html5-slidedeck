PR.registerLangHandler(PR.createSimpleLexer(
 [[PR.PR_PLAIN, /^[\t\n\r \xA0]+/, null, "\t\n\r \xA0"]],
 [[PR.PR_KEYWORD, /[$]/, null]]
), ["shell"]);
