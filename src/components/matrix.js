import React from "react";

export default function Tracks({ headline, desc, endSlice }) {
  return (
<section id="plan-comparison">

            <div class="container">

              <h2 class="section-header"><big>Compare Pricing Plans</big></h2>

              <p>Select the plan that works for you</p>

              <table id="plan-matrix">
                <thead>
                  <tr>
                    <th class="plan-matrix-label"></th>
                    <th class="plan-matrix-details">FastTrack</th>
                    <th class="plan-matrix-details">LevelUp Career Track</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td class="plan-matrix-label">Zero fee unless you get a job</td>
                    <td class="plan-matrix-details active">
                      <span class="ss-check"></span> Included</td>
                    <td class="plan-matrix-details active">
                      <span class="ss-check"></span> Included</td>

                  </tr>

                 <tr>
                    <td class="plan-matrix-label">Minimum repayment threshold  </td>
                    <td class="plan-matrix-details active">
                      <span class="ss-check"></span> $3k USD /month</td>
                    <td class="plan-matrix-details active">
                      <span class="ss-check"></span> $2k USD /month</td>

                  </tr>

                  <tr>
                    <td class="plan-matrix-label">Repayment schedule</td>
                    <td class="plan-matrix-details active">
                      <span class="ss-check"></span> 15% income for 12 months</td>
                    <td class="plan-matrix-details active">
                      <span class="ss-check"></span> 15% income for 36 months</td>

                  </tr>

                 <tr>
                    <td class="plan-matrix-label">Career Coach  </td>
                    <td class="plan-matrix-details active"><span class="ss-check"></span> Included</td>
                    <td class="plan-matrix-details active">
                      <span class="ss-check"></span> Included</td>

                  </tr>

                  <tr>
                    <td class="plan-matrix-label">Guaranteed Job Referrals </td>
                    <td class="plan-matrix-details active">
                      <span class="ss-check"></span> Included</td>
                    <td class="plan-matrix-details active">
                      <span class="ss-check"></span> Included</td>

                  </tr>

                     <tr>
                    <td class="plan-matrix-label">Access to Interview Bank </td>
                    <td class="plan-matrix-details active">
                      <span class="ss-check"></span> Included</td>
                    <td class="plan-matrix-details active">
                      <span class="ss-check"></span> Included</td>

                  </tr>

               <tr>
                    <td class="plan-matrix-label">Discord + Forum Access</td>
                    <td class="plan-matrix-details"> <span class="ss-check"></span> Included</td>
                    <td class="plan-matrix-details">
                      <span class="ss-check"></span> Included</td>

                  </tr>
    

                  <tr>
                    <td class="plan-matrix-label">Currated Curriculum </td>
                    <td class="plan-matrix-details active"></td>
                    <td class="plan-matrix-details active">
                      <span class="ss-check"></span> Included</td>

                  </tr>

                  <tr>
                    <td class="plan-matrix-label">Dedicated Mentor  </td>
                    <td class="plan-matrix-details active">
                      <span class="ss-check"></span> </td>
                    <td class="plan-matrix-details active">
                      <span class="ss-check"></span> Included</td>
   
                  </tr>
      

                  <tr>
                    <td class="plan-matrix-label">Lectures from top mentors</td>
                    <td class="plan-matrix-details">
                      <span class="ss-check"></span> </td>
                    <td class="plan-matrix-details">
                      <span class="ss-check"></span> Included</td>

                  </tr>
                  

                  <tr>
                    <td class="plan-matrix-label">Teaching Assistant</td>
                    <td class="plan-matrix-details">
                      <span class="ss-check"></span> </td>
                    <td class="plan-matrix-details">
                      <span class="ss-check"></span> Included</td>

                  </tr>
                  

 

 
                  <tr>
                    <td class="plan-matrix-label">Course Certificate  </td>
                    <td class="plan-matrix-details active"></td>
                     <td class="plan-matrix-details active">
                      <span class="ss-check"></span> Included
                    </td>
                  </tr>
                

                     

                </tbody>
              </table>
            </div>
          </section>
  );
}


