from django.shortcuts import redirect


def login_check(func):
    def wrap(request,*args,**kwargs):
        if not (request.session.get("userId")):
            return redirect("login")
        else:
            return func(request,*args,**kwargs)
    return wrap