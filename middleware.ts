import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server'
import { NextResponse } from 'next/server';

const isPublicRoute = createRouteMatcher([
  '/',
  '/sign-in(.*)',
  '/sign-up(.*)',
  '/api/webhook'
])

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/organization(.*)',
  '/organization/:id',
]);

export default clerkMiddleware(async (auth, req) => {


  // if (!isPublicRoute(req)) await auth.protect()

  // const {userId, orgId } = await auth.protect();
  // const {redirectToSignIn} = await auth();

  
  // const url = new URL(req.url);

  // console.log("REQUEST --------------------------------")
  // console.log(req);
  // console.log("URL --------------------------------")
  // console.log(req.url);
  // console.log("NEXT URL --------------------------------")
  // console.log(req.nextUrl);
  // console.log("--------------------------------")
  // console.log("OrgId --------------------------------")
  // console.log(orgId);
  // console.log("--------------------------------")


  // if(userId && isPublicRoute(req)) {
  //   let redirectPath = "/select-org";
    
  //   if(orgId) {
  //     redirectPath = `/organization/${orgId}`;
  //   }
    
  //   if (req.nextUrl.pathname !== redirectPath) {
  //     const orgSelection = new URL(redirectPath, url);
  //     return NextResponse.redirect(orgSelection);
  //   }

  //   // orgSelection.searchParams.set('from', req.nextUrl.pathname)
  //   // return NextResponse.redirect(orgSelection);
  // }

  // if(!userId && !isPublicRoute(req)) {
  //   return redirectToSignIn({returnBackUrl: req.url});  
  // }

  

  // if (userId && !orgId && req.nextUrl.pathname !== "/select-org") {
  //   const orgSelection = new URL("/select-org", req.url);
  //   return NextResponse.redirect(orgSelection); 
  // }

  // // if (isProtectedRoute(req) && !orgId) {
  // //   const orgSelection = new URL("/select-org", req.nextUrl);
  // //   return NextResponse.redirect(orgSelection);
  // // }

  // return NextResponse.next();
})


export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
}