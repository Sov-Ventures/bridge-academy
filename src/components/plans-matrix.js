import React from "react";

export default function PlansMatrix({ headline, desc, endSlice }) {
  return (
<section id="plan-comparison">

            <div class="container">

              <h2 class="section-header"><big>Compare Bridge</big></h2>


              <table id="plan-matrix">
                <thead>
                  <tr>
                    <th class="plan-matrix-label">Criteria </th>
                    <th class="plan-matrix-details">Bridge</th>
                    <th class="plan-matrix-details">Talent Marketplace</th>
                    <th class="plan-matrix-details">Full-time Employee</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td class="plan-matrix-label">Days to hire </td>
                    <td class="plan-matrix-details active">
                     1-3 weeks  </td>
                    <td class="plan-matrix-details active">
                      2 weeks - 2 months  
                     </td>
                    <td class="plan-matrix-details active">
                       >3 months
                     </td>

                  </tr>

                 <tr>
                    <td class="plan-matrix-label">Time you spend interviewing </td>
                    <td class="plan-matrix-details active">
                      1hr * 
                    </td>
                    <td class="plan-matrix-details active">
                     2 - 20 hours 
                    </td>
                    <td class="plan-matrix-details active">
                     65 hours 
                    </td>
                  </tr>

                  <tr>
                    <td class="plan-matrix-label">Time you spend onboarding </td>
                    <td class="plan-matrix-details active">
                    0 hours 
                    </td>
                    <td class="plan-matrix-details active">
                    >2 weeks  
                    </td>
                    <td class="plan-matrix-details active">
                     >2 weeks
                    </td>
                  </tr>

                 <tr>
                    <td class="plan-matrix-label">Hidden hiring costs  </td>
                    <td class="plan-matrix-details active">
                      $0  
                    </td>
                    <td class="plan-matrix-details active">
                      $0 
                    </td>
                    <td class="plan-matrix-details active">
                      $23,000
                    </td>
                  </tr>
                
                <tr>
                    <td class="plan-matrix-label">Hidden hiring costs  </td>
                    <td class="plan-matrix-details active">
                      0 **    
                    </td>
                    <td class="plan-matrix-details active">
                      2-10% 
                    </td>
                    <td class="plan-matrix-details active">
                      20%
                    </td>
                  </tr>


                     

                </tbody>
              </table>

              <p align="left"><small><sup>*</sup>Technical assessment call with a Bridge architect</small></p>
              <p align="left"><small><sup>**</sup>In the case a developer is not a good fit for your team, we will replace them immediately.</small></p>

            </div>
          </section>
  );
}


