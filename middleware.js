import { NextResponse } from "next/server"

export function middleware(request){
    const user = 'user'

    if (!user){
        return NextResponse.redirect(
            new URL("/", request.url)
            )
    }
    console.log("running")
    return NextResponse.next()
}

export const config = {
    matcher: ['/admin', '/blog']
}