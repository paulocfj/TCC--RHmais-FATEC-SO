module.exports = {

    nivelGestor: (req, res, next) => {

        if (req.isAuthenticated() && req.user.acesso == 1) {
            return next();

        } else {

            req.flash("error_msg", "Você precisa ter um acesso de Gestor")
            res.redirect('/login');
        }
    },

    nivelColaborador: (req, res, next) => {

        if (req.isAuthenticated() && req.user.acesso == 0) {
            return next();
        } else {

            req.flash("error_msg", "Você precisa ter um acesso de colaborador");
            res.redirect('/login');
        }
    },

    estaLogado: (req, res, next) => {

        if (req.isAuthenticated() && req.path == '/login') {
            res.redirect('/');
        }

        if (req.isAuthenticated() && req.path == '/') {
            res.redirect('/colaborador/listagem');
        }

        if (!req.isAuthenticated() && req.path == '/') {

            res.redirect('/login');
        }

        next();

    }


}