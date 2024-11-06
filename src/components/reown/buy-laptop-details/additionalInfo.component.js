import React from 'react'

const AdditionalInfoComponent = () => {
  return (
      <div className='additional_Info'>
          <div className='pageTitle' style={{ justifyContent: 'flex-start' }}>
              <p>Additional Information</p>
          </div>
          <div className='table-responsive'>
              <table className="table">
                  <tbody><tr>
                      <td> Condition </td>
                      <td> Very good Condition</td>
                  </tr>
                      <tr>
                          <td>Tested</td>
                          <td> Fully Tested</td>
                      </tr>
                      <tr>
                          <td>Package</td>
                          <td> Recycle Device package</td>
                      </tr>
                      <tr>
                          <td>Accessories</td>
                          <td> Accessories may not be original but have been tested to be
                              compatible and
                              fully functiona
                          </td>
                      </tr>
                      <tr>
                          <td>Packer</td>
                          <td>One of the below: Hefei Bitland Information Technology Co.,Ltd -
                              No.4088
                              Jiuxiu Road National Hefei economic &amp; technology development
                              area.</td>
                      </tr>
                      <tr>
                          <td>Net Quantity</td>
                          <td>1 Piece</td>
                      </tr>
                      <tr>
                          <td>Item Dimensions LxWxH</td>
                          <td>32.7 x 24.1 x 2 Centimeters</td>
                      </tr>
                      <tr>
                          <td>Generic Name</td>
                          <td>Laptop</td>
                      </tr>
                  </tbody></table>
          </div>
      </div>
  )
}

export default AdditionalInfoComponent