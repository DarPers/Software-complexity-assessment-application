import React, { useState, useMemo } from 'react';
import classes from './TableRow.module.css';
import Radio from '../UI/input/Radio';

const CocomoTable = ({data, setData}) => {  
  
    const handleRadioChange = (value, name) => {
        setData({...data, [name]:value});
    }
    
    return (
      <div className={classes.table}>
        <table>
          <tbody>
            <tr className={classes.tr}>
              <td>ProductAttributes</td>
              <td>Very low</td>
              <td>Low</td>
              <td>Nominal</td>
              <td>High</td>
              <td>Very high</td>
              <td>Extra high</td>
            </tr>
            <tr id="RELY" onChange={(event) => handleRadioChange(event.target.value, event.target.name)}>
              <td>RELY</td>
              <td><Radio name="RELY" value="Very low"/></td>
              <td><Radio name="RELY" value="Low"/></td>
              <td><Radio name="RELY" value="Nominal"/></td>
              <td><Radio name="RELY" value="High"/></td>
              <td><Radio name="RELY" value="Very high"/></td>
              <td></td>
            </tr>
            <tr id="DATA" onChange={(event) => handleRadioChange(event.target.value, event.target.name)}>
              <td>DATA</td>
              <td></td>
              <td><Radio name="DATA" value="Low"/></td>
              <td><Radio name="DATA" value="Nominal"/></td>
              <td><Radio name="DATA" value="High"/></td>
              <td><Radio name="DATA" value="Very high"/></td>
              <td></td>
            </tr>
            <tr id="CPLX" onChange={(event) => handleRadioChange(event.target.value, event.target.name)}>
              <td>CPLX</td>
              <td><Radio name="CPLX" value="Very low"/></td>
              <td><Radio name="CPLX" value="Low"/></td>
              <td><Radio name="CPLX" value="Nominal"/></td>
              <td><Radio name="CPLX" value="High"/></td>
              <td><Radio name="CPLX" value="Very high"/></td>
              <td><Radio name="CPLX" value="Extra high"/></td>
            </tr>
            <tr>Computer attributes</tr>
            <tr id="TIME" onChange={(event) => handleRadioChange(event.target.value, event.target.name)}>
              <td>TIME</td>
              <td></td>
              <td></td>
              <td><Radio name="TIME" value="Nominal"/></td>
              <td><Radio name="TIME" value="High"/></td>
              <td><Radio name="TIME" value="Very high"/></td>
              <td><Radio name="TIME" value="Extra high"/></td>
            </tr>
            <tr id="STOR" onChange={(event) => handleRadioChange(event.target.value, event.target.name)}>
              <td>STOP</td>
              <td></td>
              <td></td>
              <td><Radio name="STOR" value="Nominal"/></td>
              <td><Radio name="STOR" value="High"/></td>
              <td><Radio name="STOR" value="Very high"/></td>
              <td><Radio name="STOR" value="Extra high"/></td>
            </tr>
            <tr id="VIRT" onChange={(event) => handleRadioChange(event.target.value, event.target.name)}>
              <td>VIRT</td>
              <td></td>
              <td><Radio name="VIRT" value="Low"/></td>
              <td><Radio name="VIRT" value="Nominal"/></td>
              <td><Radio name="VIRT" value="High"/></td>
              <td><Radio name="VIRT" value="Very high"/></td>
              <td></td>
            </tr>
            <tr id="TURN" onChange={(event) => handleRadioChange(event.target.value, event.target.name)}>
              <td>TURN</td>
              <td></td>
              <td><Radio name="TURN" value="Low"/></td>
              <td><Radio name="TURN" value="Nominal"/></td>
              <td><Radio name="TURN" value="High"/></td>
              <td><Radio name="TURN" value="Very high"/></td>
              <td></td>
            </tr>
            <tr>Personnel Attributes</tr>
            <tr id="ACAP" onChange={(event) => handleRadioChange(event.target.value, event.target.name)}>
              <td>ACAP</td>
              <td><Radio name="ACAP" value="Very low"/></td>
              <td><Radio name="ACAP" value="Low"/></td>
              <td><Radio name="ACAP" value="Nominal"/></td>
              <td><Radio name="ACAP" value="High"/></td>
              <td><Radio name="ACAP" value="Very high"/></td>
              <td></td>
            </tr>
            <tr id="AEXP" onChange={(event) => handleRadioChange(event.target.value, event.target.name)}>
              <td>AEXP</td>
              <td><Radio name="AEXP" value="Very low"/></td>
              <td><Radio name="AEXP" value="Low"/></td>
              <td><Radio name="AEXP" value="Nominal"/></td>
              <td><Radio name="AEXP" value="High"/></td>
              <td><Radio name="AEXP" value="Very high"/></td>
              <td></td>
            </tr>
            <tr id="PCAP" onChange={(event) => handleRadioChange(event.target.value, event.target.name)}>
              <td>PCAP</td>
              <td><Radio name="PCAP" value="Very low"/></td>
              <td><Radio name="PCAP" value="Low"/></td>
              <td><Radio name="PCAP" value="Nominal"/></td>
              <td><Radio name="PCAP" value="High"/></td>
              <td><Radio name="PCAP" value="Very high"/></td>
              <td></td>
            </tr>
            <tr id="VEXP" onChange={(event) => handleRadioChange(event.target.value, event.target.name)}>
              <td>VEXP</td>
              <td><Radio name="VEXP" value="Very low"/></td>
              <td><Radio name="VEXP" value="Low"/></td>
              <td><Radio name="VEXP" value="Nominal"/></td>
              <td><Radio name="VEXP" value="High"/></td>
              <td></td>
              <td></td>
            </tr>
            <tr id="LEXP" onChange={(event) => handleRadioChange(event.target.value, event.target.name)}>
              <td>LEXP</td>
              <td><Radio name="LEXP" value="Very low"/></td>
              <td><Radio name="LEXP" value="Low"/></td>
              <td><Radio name="LEXP" value="Nominal"/></td>
              <td><Radio name="LEXP" value="High"/></td>
              <td></td>
              <td></td>
            </tr>
            <tr>Project Attributes</tr>
            <tr id="MODP" onChange={(event) => handleRadioChange(event.target.value, event.target.name)}>
              <td>MODP</td>
              <td><Radio name="MODP" value="Very low"/></td>
              <td><Radio name="MODP" value="Low"/></td>
              <td><Radio name="MODP" value="Nominal"/></td>
              <td><Radio name="MODP" value="High"/></td>
              <td><Radio name="MODP" value="Very high"/></td>
              <td></td>
            </tr>
            <tr id="TOOL" onChange={(event) => handleRadioChange(event.target.value, event.target.name)}>
              <td>TOOL</td>
              <td><Radio name="TOOL" value="Very low"/></td>
              <td><Radio name="TOOL" value="Low"/></td>
              <td><Radio name="TOOL" value="Nominal"/></td>
              <td><Radio name="TOOL" value="High"/></td>
              <td><Radio name="TOOL" value="Very high"/></td>
              <td></td>
            </tr>
            <tr id="SCED" onChange={(event) => handleRadioChange(event.target.value, event.target.name)}>
              <td>SCED</td>
              <td><Radio name="SCED" value="Very low"/></td>
              <td><Radio name="SCED" value="Low"/></td>
              <td><Radio name="SCED" value="Nominal"/></td>
              <td><Radio name="SCED" value="High"/></td>
              <td><Radio name="SCED" value="Very high"/></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };
  
  export default CocomoTable;