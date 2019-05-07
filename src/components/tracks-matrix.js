import React from "react";

export default function TracksMatrix({ headline, desc, endSlice }) {
  return (
<section id="plan-comparison">

            <div class="container">

              <h2 class="section-header"><big>Choose Your Own Path</big></h2>

              <table id="plan-matrix">
                <thead>
                  <tr>
                  <th class="plan-matrix-label"><h4>Paths</h4><br /></th>
                    <th class="plan-matrix-details"><big>Explorer Path</big><br /><small>Ideal for exploring and dabbling with new technologies. <a href="/learn#tech-tracks">See tracks.</a></small>
                    </th>
                    <th class="plan-matrix-details"><big>Career Path</big><br /><small>Ideal for transitioning into new roles or industries. <a href="/learn#career-tracks">See tracks.</a></small></th>
                  </tr>

                  <tr>
                    <th class="plan-matrix-label"></th>
                    <th class="plan-matrix-details">
                      <a
                      className="btn btn-primary"
                      href="/learn#tech-tracks"
                       >
                      Explore courses
                    </a>
                    </th>
                    <th class="plan-matrix-details">
                     <a
                      className="btn btn-primary"
                      href="/learn#career-tracks"
                       >
                      Explore tracks
                    </a>
                    </th>

                  </tr>

                </thead>

                <tbody>


                  <tr>
                    <td class="plan-matrix-label">Costs</td>
                     <td class="plan-matrix-details active">Pro-rated refund <strong>up to 50%</strong><br /> Complete a course, get 50% back from your deposit. 50% is donated to our <a href="/fund">scholarship fund</a>.</td>
                    <td class="plan-matrix-details active"><strong>$600 refundable deposit</strong> or (3) $199 monthly payments, 100% refunded on completion + 15% income share, <a href="/candidate-agreement">see terms</a>.</td>
                  </tr>

                  <tr>
                    <td class="plan-matrix-label">Scholarships Available</td>
                     <td class="plan-matrix-details active">N/A</td>
                    <td class="plan-matrix-details active">Can be earned through 'explore' program.</td>
                  </tr>

                  <tr>
                    <td class="plan-matrix-label">Payment Methods</td>
                     <td class="plan-matrix-details active">Credit Card, Paypal or Crypto</td>
                    <td class="plan-matrix-details active">Credit Card, Paypal or Crypto.</td>
                  </tr>

                  <tr>
                    <td class="plan-matrix-label">Time Commitment</td>
                     <td class="plan-matrix-details active">Go at your own pace. Courses vary from 1-2 months @ ~10hrs/week.</td>
                    <td class="plan-matrix-details active">3 months (fulltime: 40hrs/week) <br />6 months (part-time: 15-20hrs)</td>
                  </tr>

                 <tr>
                    <td class="plan-matrix-label">Currated Tutorials </td>
                    <td class="plan-matrix-details active">
                      <span class="ss-check"></span> Included</td>
                    <td class="plan-matrix-details active">
                      <span class="ss-check"></span> Included</td>

                  </tr>

                <tr>
                    <td class="plan-matrix-label">Side Project Ideas </td>
                    <td class="plan-matrix-details active">
                      <span class="ss-check"></span> Included</td>
                    <td class="plan-matrix-details active">
                      <span class="ss-check"></span> Included</td>

                  </tr>

                   <tr>
                    <td class="plan-matrix-label">Sponsored Projects </td>
                    <td class="plan-matrix-details active">
                      <span class="ss-check"></span> Available</td>
                    <td class="plan-matrix-details active">
                      <span class="ss-check"></span> Available</td>

                  </tr>


                  <tr>
                    <td class="plan-matrix-label">Job Board Access </td>
                    <td class="plan-matrix-details active">
                      <span class="ss-check"></span> Included</td>
                    <td class="plan-matrix-details active">
                      <span class="ss-check"></span> Included</td>
       
                  </tr>

       

                  <tr>
                    <td class="plan-matrix-label">Graduate Certificate  </td>
                      <td class="plan-matrix-details active">
                      <span class="ss-check"></span> Included</td>
       
                     <td class="plan-matrix-details active">
                      <span class="ss-check"></span> Included</td>
       
                  </tr>

               <tr>
                    <td class="plan-matrix-label">Community Chat + Forum Access</td>
                    <td class="plan-matrix-details"> <span class="ss-check"></span> Included</td>
                 <td class="plan-matrix-details"> <span class="ss-check"></span> Included</td>
   
                  </tr>
    


               <tr>
                    <td class="plan-matrix-label">Hiring bonus  </td>
                     <td class="plan-matrix-details active">
                      $500 Bonus if you join a hiring partner
                     </td>
                     <td class="plan-matrix-details active">
                      <span class="ss-check"></span> N/A</td>

                  </tr>

                 <tr>
                    <td class="plan-matrix-label">Career Coaching </td>
                    <td class="plan-matrix-details active"></td>
                    <td class="plan-matrix-details active"><span class="ss-check"></span> Included</td>

                  </tr>


                  <tr>
                    <td class="plan-matrix-label">Personalized Curriculum </td>
                      <td class="plan-matrix-details active">
                      <span class="ss-check"></span> 
                     </td>
                     <td class="plan-matrix-details active">
                      <span class="ss-check"></span> Included</td>
  
                  </tr>

          <tr>
                    <td class="plan-matrix-label">Job Guarantee  </td>
                     <td class="plan-matrix-details active">
                     </td>
                     <td class="plan-matrix-details active">
                      <span class="ss-check"></span> Included
                     </td>

                  </tr>



                  <tr>
                    <td class="plan-matrix-label">Personal Mentor  </td>
                    <td class="plan-matrix-details active">
                      </td>
                      <td class="plan-matrix-details active">
                      <span class="ss-check"></span> Included</td>
       
                  </tr>
      

                  <tr>
                    <td class="plan-matrix-label">Lectures from top mentors</td>
                    <td class="plan-matrix-details">
                      </td>
                <td class="plan-matrix-details">
                      <span class="ss-check"></span> Included</td>
  
                  </tr>
                  

                  <tr>
                    <td class="plan-matrix-label">TA Support</td>
                    <td class="plan-matrix-details">
                     </td>
                   <td class="plan-matrix-details active">
                      <span class="ss-check"></span> Included</td>
       
                  </tr>
                  


                
 
                     

                </tbody>
              </table>
            </div>
          </section>
  );
}


