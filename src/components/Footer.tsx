import sampleQR from '/icons/qrcode.svg';
import googlePlayLogo from '/icons/google_play.svg';
import appStoreLogo from '/icons/app_store.svg';
import facebookIcon from '/icons/facebook.svg';
import twitterIcon from '/icons/twitter.svg';
import instagramIcon from '/icons/instagram.svg';
import linkedinIcon from '/icons/linkedin.svg';

export function Footer() {
    return (
        <footer className="w-full bg-black text-white px-4 py-20">
            <div className="w-full max-w-[100rem] mx-auto flex justify-center items-start gap-20 flex-wrap">
                <div className="w-52 flex flex-col gap-6">
                    <p className="text-2xl font-semibold" role="heading">
                        ECommerce
                    </p>
                    <div className="flex flex-col gap-4">
                        <p>Subscribe</p>
                        <p>Get 10% off your first order</p>
                    </div>
                </div>

                <div className="w-52 flex flex-col gap-6">
                    <p className="text-xl font-semibold" role="heading">
                        Support
                    </p>
                    <div className="flex flex-col gap-4">
                        <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit.
                        </p>
                        <p>example@email.com</p>
                        <p>+00-00000-00000</p>
                    </div>
                </div>

                <div className="w-32 flex flex-col gap-6">
                    <p className="text-xl font-semibold" role="heading">
                        Account
                    </p>
                    <div className="flex flex-col gap-4">
                        <p>My Account</p>
                        <p>Login / Register</p>
                        <p>Cart</p>
                        <p>Wishlist</p>
                        <p>Shop</p>
                    </div>
                </div>

                <div className="w-28 flex flex-col gap-6">
                    <p className="text-xl font-semibold" role="heading">
                        Quick Link
                    </p>
                    <div className="flex flex-col gap-4">
                        <p>Privacy Policy</p>
                        <p>Terms of Use</p>
                        <p>FAQ</p>
                        <p>Contact</p>
                    </div>
                </div>

                <div className="w-72 flex flex-col gap-6">
                    <p className="text-xl font-semibold" role="heading">
                        Download App
                    </p>
                    <div className="flex flex-col gap-4">
                        <div>
                            <p className="text-sm text-[#fafafa] mb-2">
                                Save $3 with App New User Only
                            </p>
                            <div className="flex justify-center items-center">
                                <div className="w-28 p-0.5 bg-white">
                                    <img src={sampleQR} alt="Dummy QR Code" />
                                </div>
                                <div className="flex-1 flex flex-col px-2">
                                    <img
                                        src={googlePlayLogo}
                                        alt="Download from Google Play"
                                        className="flex-1"
                                    />
                                    <img
                                        src={appStoreLogo}
                                        alt="Download from App Store"
                                        className="flex-1"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-start items-center gap-6">
                            <img src={facebookIcon} alt="Facebook" />
                            <img src={twitterIcon} alt="Twitter" />
                            <img src={instagramIcon} alt="Instagram" />
                            <img src={linkedinIcon} alt="LinkedIn" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
