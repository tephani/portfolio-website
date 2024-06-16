// import { NextResponse } from "next/server";
// import { Resend } from "resend";

// const resend = new Resend(process.env.RESEND_API_KEY);
// const fromEmail = process.env.FROM_EMAIL;

// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { email, subject, message } = body;

//     const { data, error } = await resend.emails.send({
//       from: fromEmail,
//       to: ["st.palero@gmail.com", email],
//       subject: subject,
//       react: (
//         <>
//           <h1>{subject}</h1>
//           <p>Thank you for contacting me!</p>
//           <p>New message submitted:</p>
//           <p>{message}</p>
//         </>
//       ),
//     });

//     if (error) {
//       console.error("Resend error:", error);
//       return NextResponse.json({ error }, { status: 500 });
//     }

//     console.log("Email sent:", data);
//     return NextResponse.json(data);
//   } catch (error) {
//     console.error("Catch error:", error);
//     return NextResponse.json({ error: error.message }, { status: 500 });
//   }
// }
