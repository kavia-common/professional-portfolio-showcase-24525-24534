import React, { useEffect, useRef } from "react";
import "../styles/figma-take-this-jobs.css";
import { toggleDisplay } from "../utils/appInteractions";

/**
 * PUBLIC_INTERFACE
 * TakeThisJobsPage
 * Converted from assets/take-this-jobs-907-315.html
 * Route: /take-this-jobs
 */
function TakeThisJobsPage() {
  const overlayRef = useRef(null);
  const modalRef = useRef(null);

  // Mimic initial visibility from original static js (visible by default)
  useEffect(() => {
    toggleDisplay(overlayRef.current, "block");
    toggleDisplay(modalRef.current, "block");
  }, []);

  return (
    <div className="take-this-jobs-root" role="main" aria-label="Take this jobs page">
      <div className="screen take-this-jobs-907-315" role="document" aria-label="Take this jobs screen">
        <div className="frame top" style={{ left: "0px", top: "0px", width: "375px", height: "987px" }}>
          <div className="status-bar" style={{ left: "0px", top: "0px", width: "375px", height: "44px" }}>
            <div className="status-time" style={{ left: "14px", top: "12px", width: "180px", height: "22px" }}>
              <span className="text time-typo">9:41</span>
            </div>
            <div className="status-symbols" style={{ left: "291.5px", top: "16.6px", width: "68px", height: "13px" }}>
              <div className="icon-battery" style={{ left: "42.5px", top: "0.56px", width: "24.5px", height: "11.5px" }}>
                <img className="img abs" src="/assets/figma_image_907_675_44_1271.png" alt="battery-outline" style={{ left: "0px", top: "0px", width: "22px", height: "11.5px" }} />
                <img className="img abs" src="/assets/figma_image_907_675_44_1270.png" alt="battery-fill" style={{ left: "1px", top: "1px", width: "20px", height: "9.5px" }} />
              </div>
              <div className="icon-signal" style={{ left: "0px", top: "0px", width: "17.1px", height: "10.7px" }}></div>
              <div className="icon-wifi" style={{ left: "22.1px", top: "0px", width: "15.4px", height: "11.06px" }}></div>
            </div>
          </div>

          <div className="top-bar" style={{ left: "0px", top: "44px", width: "375px", height: "64px" }}>
            <div className="icon-btn" style={{ left: "24px", top: "22px", width: "20px", height: "20px" }}>
              <img className="img" src="/assets/figma_image_907_676_512_5564_517_10991.png" alt="chevron-left" />
            </div>
            <div className="topbar-center" style={{ left: "97px", top: "9px", width: "181px", height: "46px" }}>
              <div className="text header-title center">Job Details</div>
              <div className="text header-sub center">task#5323</div>
            </div>
            <div className="icon-btn" style={{ left: "331px", top: "22px", width: "20px", height: "20px" }}>
              <img className="img" src="/assets/figma_image_907_676_512_5566_517_11253.png" alt="dots-horizontal" />
            </div>
          </div>

          <div className="content" style={{ left: "0px", top: "108px", width: "375px", height: "879px" }}>
            <section className="card job-infos" style={{ left: "0px", top: "2px", width: "375px", height: "223px" }}>
              <div className="row between" style={{ left: "24px", top: "34px", width: "327px", height: "22px" }}>
                <div className="text date">10/05/2020</div>
                <div className="badges" style={{ width: "98px", height: "22px" }}>
                  <div className="badge time" style={{ left: "0px", top: "0px", width: "44px", height: "22px" }}>
                    <div className="badge-icon" style={{ left: "6px", top: "5px", width: "12px", height: "12px" }}>
                      <img className="img" src="/assets/figma_image_907_682_503_7440_517_11348.png" alt="clock-glyph" />
                    </div>
                    <div className="badge-text" style={{ left: "24px", top: "2px" }}>3d</div>
                  </div>
                  <div className="badge word" style={{ left: "52px", top: "0px", width: "46px", height: "22px" }}>
                    <span className="badge-word-text">Open</span>
                  </div>
                </div>
              </div>

              <div className="title-20" style={{ left: "24px", top: "72px", width: "327px", height: "30px" }}>Stainless roof renovations</div>

              <div className="row" style={{ left: "24px", top: "120px", width: "327px", height: "18px" }}>
                <div className="icon-16" aria-hidden="true">
                  <img className="img" src="/assets/figma_image_907_688_517_10785.png" alt="location-marker" />
                </div>
                <div className="text location" style={{ marginLeft: "8px" }}>Rose boulevard 12th, Cal, USA 1,3 km</div>
              </div>

              <div className="chip-outline pill" style={{ left: "24px", top: "154px", width: "327px", height: "55px" }}>
                <div className="avatars" style={{ left: "8px", top: "11.5px", width: "54px", height: "32px" }}>
                  <div className="avatar" style={{ left: "0px", top: "0px", width: "32px", height: "32px" }}>
                    <img className="img avatar-img" src="/assets/figma_image_907_692.png" alt="avatar-1" />
                  </div>
                  <div className="avatar" style={{ left: "11px", top: "0px", width: "32px", height: "32px" }}></div>
                  <div className="avatar" style={{ left: "22px", top: "0px", width: "32px", height: "32px" }}></div>
                </div>
                <div className="col" style={{ left: "88px", top: "8px", width: "241px", height: "39px" }}>
                  <div className="text people-ttl">3 people</div>
                  <div className="text people-sub">Keiko,  Jason, Peter</div>
                </div>
              </div>
            </section>

            <section className="card unit-infos" style={{ left: "0px", top: "341px", width: "375px", height: "320px" }}>
              <div className="text section-sub" style={{ left: "24px", top: "24px", width: "327px", height: "24px" }}>UNIT INFORMATION</div>
              <div className="title-20" style={{ left: "24px", top: "52px", width: "327px", height: "30px" }}>Stainless roof renovations</div>

              <div className="map-frame radius-8" style={{ left: "24px", top: "86px", width: "327px", height: "160px" }}>
                <img className="img cover radius-8" src="/assets/figma_image_907_702.png" alt="map" />
                <div className="pin-24" style={{ left: "152px", top: "68px", width: "24px", height: "24px" }}>
                  <img className="img" src="/assets/figma_image_907_704.png" alt="pin" />
                </div>
              </div>

              <div className="row" style={{ left: "24px", top: "250px", width: "327px", height: "18px" }}>
                <div className="icon-16" aria-hidden="true"></div>
                <div className="text location" style={{ marginLeft: "8px" }}>Rose boulevard 12th 60121, Cal, USA 1,3 km</div>
              </div>
              <div className="text link-success" style={{ left: "24px", top: "272px", width: "86px", height: "24px" }}>View details</div>
            </section>

            <section className="card managers-note" style={{ left: "0px", top: "677px", width: "375px", height: "164px" }}>
              <div className="text section-sub" style={{ left: "24px", top: "24px", width: "295px", height: "24px" }}>MANAGER NOTE</div>
              <div className="text note" style={{ left: "24px", top: "52px", width: "327px", height: "60px" }}>
                This machine can’t working well every i turn it on the AC always make a noisy sound, and the AC can always hot ever...
              </div>
              <div className="text link-success" style={{ left: "24px", top: "116px", width: "76px", height: "24px" }}>View more</div>
            </section>

            <section className="card manager-info" style={{ left: "0px", top: "845px", width: "375px", height: "144px" }}>
              <div className="text section-sub" style={{ left: "24px", top: "24px", width: "295px", height: "24px" }}>MANAGER INFORMATION</div>
              <div className="chip-outline pill" style={{ left: "24px", top: "64px", width: "327px", height: "56px" }}>
                <div className="profile-img radius-100" style={{ left: "8px", top: "8px", width: "40px", height: "40px" }}>
                  <img className="img cover radius-100 bordered" src="/assets/figma_image_907_716.png" alt="Jenny Wilson" />
                </div>
                <div className="col" style={{ left: "64px", top: "8.5px", width: "241px", height: "39px" }}>
                  <div className="text person-name">Jenny Wilson</div>
                  <div className="text person-id">ID#008638</div>
                </div>
              </div>
            </section>
          </div>
        </div>

        <div className="bottom-cta" style={{ left: "0px", top: "715px", width: "375px", height: "114px" }}>
          <button className="btn-primary shadow radius-8" style={{ left: "24px", top: "16px", width: "327px", height: "48px" }} data-action="open-approval" type="button"
            onClick={() => { toggleDisplay(overlayRef.current, "block"); toggleDisplay(modalRef.current, "block"); }}>
            <span className="btn-text">Take Job</span>
          </button>
          <div className="home-indicator" style={{ left: "120px", top: "101px", width: "135px", height: "5px" }}></div>
        </div>

        <div ref={overlayRef} className="overlay" style={{ left: "0px", top: "0px", width: "375px", height: "812px", display: "none" }}
          onClick={() => { toggleDisplay(overlayRef.current, "none"); toggleDisplay(modalRef.current, "none"); }}></div>

        <div ref={modalRef} className="modal approval radius-12 shadow-elev" style={{ left: "24px", top: "149.5px", width: "327px", height: "513px", display: "none" }} role="dialog" aria-modal="true" aria-labelledby="approval-title">
          <div className="modal-content" style={{ left: "20px", top: "20px", width: "287px", height: "473px" }}>
            <div className="illustration" style={{ left: "0px", top: "0px", width: "287px", height: "243px" }}>
              <img className="img contain" src="/assets/figma_image_907_366.png" alt="Managing illustration" />
            </div>
            <div className="desc" style={{ left: "0px", top: "255px", width: "287px", height: "62px" }}>
              <div id="approval-title" className="text modal-title center">Take this jobs?</div>
              <div className="text modal-sub center">Service Gutters protection installation </div>
            </div>
            <div className="actions" style={{ left: "0px", top: "357px", width: "287px", height: "116px" }}>
              <button className="btn-primary radius-8" style={{ left: "0px", top: "0px", width: "287px", height: "48px" }} data-action="confirm-approval" type="button"
                onClick={() => { toggleDisplay(overlayRef.current, "none"); toggleDisplay(modalRef.current, "none"); }}>
                <span className="btn-text">Yes, take this task</span>
              </button>
              <button className="btn-white radius-8" style={{ left: "0px", top: "68px", width: "287px", height: "48px" }} data-action="close-approval" type="button"
                onClick={() => { toggleDisplay(overlayRef.current, "none"); toggleDisplay(modalRef.current, "none"); }}>
                <span className="btn-text-alt">Cancel</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TakeThisJobsPage;
