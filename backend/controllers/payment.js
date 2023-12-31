import Razorpay from "razorpay";
import crypto from "crypto";
import User from "../models/User.js";


export const orderPayment = async (req, res) => {
	try {
		const instance = new Razorpay({
			key_id: process.env.KEY_ID,
			key_secret: process.env.KEY_SECRET,
		});

		const options = {
			amount: req.body.amount * 100,
			currency: "INR",
			receipt: crypto.randomBytes(10).toString("hex"),
		};

		instance.orders.create(options, (error, order) => {
			if (error) {
				console.log(error);
				return res.status(500).json({ message: "Something Went Wrong!" });
			}
			res.status(200).json({ data: order });
		});
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error!" });
		console.log(error);
	}
}

export const verifyPayment = async (req, res) => {
	try {
		console.log(req.body);
		const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userId } =
			req.body;
		const sign = razorpay_order_id + "|" + razorpay_payment_id;
		const expectedSign = crypto
			.createHmac("sha256", process.env.KEY_SECRET)
			.update(sign.toString())
			.digest("hex");

		if (razorpay_signature === expectedSign) {
			// Payment verified successfully

			return res.status(200).json({
				message: "Payment verified successfully",
				status: true,
				razorpay_order_id,
				razorpay_payment_id
			});
		} else {
			return res.status(400).json({ message: "Invalid signature sent!", status: false });
		}
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error!" });
		console.log(error);
	}
}

export const verifyPremiumPayment = async (req, res) => {
	try {
		console.log(req.body);
		const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userId } =
			req.body;
		const sign = razorpay_order_id + "|" + razorpay_payment_id;
		const expectedSign = crypto
			.createHmac("sha256", process.env.KEY_SECRET)
			.update(sign.toString())
			.digest("hex");

		if (razorpay_signature === expectedSign) {
			// Payment verified successfully

			// Find the user by their ID and update the 'isPremium' field
			const updatedUser = await User.findByIdAndUpdate(userId, { isPremium: true }, { new: true });
			console.log(updatedUser);
			return res.status(200).json({
				message: "Payment verified successfully",
				status: true,
				razorpay_order_id,
				razorpay_payment_id,
				user: updatedUser
			});
		} else {
			return res.status(400).json({ message: "Invalid signature sent!", status: false });
		}
	} catch (error) {
		res.status(500).json({ message: "Internal Server Error!" });
		console.log(error);
	}
}

