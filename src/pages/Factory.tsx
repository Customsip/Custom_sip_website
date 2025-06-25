
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Factory = () => {
  const [selectedSize, setSelectedSize] = useState("");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const bottleSizes = [
    { value: "200ml", label: "200ml - Compact", price: "₹25" },
    { value: "500ml", label: "500ml - Standard", price: "₹35" },
    { value: "1L", label: "1L - Large", price: "₹45" }
  ];

  const handleImageUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setUploadedImage(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleImageUpload(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file && file.type.startsWith('image/')) {
      handleImageUpload(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleOrderNow = () => {
    const message = `Hi CustomSip! I'd like to order custom water bottles:
    
Size: ${selectedSize}
Custom Label: ${uploadedImage ? "Uploaded" : "Will provide later"}

Please help me proceed with the order.`;
    
    const phoneNumber = "+919876543210";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-customsip-cream to-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="font-elegant text-4xl md:text-6xl font-bold text-customsip-darkblue mb-4">
            Design Your Perfect Bottle
          </h1>
          <p className="font-modern text-xl text-gray-600 max-w-2xl mx-auto">
            Create personalized water bottles with your custom label. Preview your design in real-time and place your order instantly.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Configuration Panel */}
          <div className="space-y-8">
            {/* Size Selection */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-elegant text-2xl text-customsip-darkblue">
                  Choose Bottle Size
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Select onValueChange={setSelectedSize}>
                  <SelectTrigger className="w-full h-12 text-lg">
                    <SelectValue placeholder="Select bottle size" />
                  </SelectTrigger>
                  <SelectContent>
                    {bottleSizes.map((size) => (
                      <SelectItem key={size.value} value={size.value}>
                        <div className="flex justify-between items-center w-full">
                          <span>{size.label}</span>
                          <span className="text-customsip-gold font-semibold ml-4">{size.price}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </CardContent>
            </Card>

            {/* Image Upload */}
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="font-elegant text-2xl text-customsip-darkblue">
                  Upload Your Label Design
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div
                  className={`border-2 border-dashed rounded-lg p-8 text-center transition-all duration-300 ${
                    isDragging
                      ? "border-customsip-gold bg-customsip-gold/10"
                      : "border-gray-300 hover:border-customsip-gold"
                  }`}
                  onDrop={handleDrop}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                >
                  {uploadedImage ? (
                    <div className="space-y-4">
                      <img
                        src={uploadedImage}
                        alt="Uploaded design"
                        className="max-h-32 mx-auto rounded-lg shadow-md"
                      />
                      <p className="text-green-600 font-medium">Design uploaded successfully!</p>
                      <Button
                        variant="outline"
                        onClick={() => setUploadedImage(null)}
                        className="text-customsip-blue border-customsip-blue hover:bg-customsip-blue hover:text-white"
                      >
                        Change Image
                      </Button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <div className="text-4xl text-gray-400">📷</div>
                      <div>
                        <p className="text-lg font-medium text-gray-700 mb-2">
                          Drag & drop your image here
                        </p>
                        <p className="text-gray-500 mb-4">or</p>
                        <label className="inline-block">
                          <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="hidden"
                          />
                          <Button
                            type="button"
                            className="bg-customsip-blue hover:bg-customsip-darkblue text-white"
                          >
                            Browse Files
                          </Button>
                        </label>
                      </div>
                      <p className="text-sm text-gray-500">
                        Supports: JPG, PNG, GIF (Max 10MB)
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Order Button */}
            {selectedSize && (
              <Card className="shadow-lg border-customsip-gold">
                <CardContent className="p-6">
                  <div className="text-center space-y-4">
                    <h3 className="font-elegant text-xl font-semibold text-customsip-darkblue">
                      Ready to Order?
                    </h3>
                    <p className="text-gray-600">
                      Selected: <span className="font-semibold text-customsip-gold">{selectedSize}</span>
                    </p>
                    <Button
                      onClick={handleOrderNow}
                      className="w-full bg-gradient-to-r from-customsip-blue to-customsip-gold text-white py-3 text-lg font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      Order Now via WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Preview Panel */}
          <div className="lg:sticky lg:top-8">
            <Card className="shadow-xl">
              <CardHeader>
                <CardTitle className="font-elegant text-2xl text-customsip-darkblue text-center">
                  Live Preview
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 text-center min-h-96 flex items-center justify-center">
                  {selectedSize ? (
                    <div className="space-y-6">
                      {/* Bottle Illustration */}
                      <div className="relative mx-auto">
                        <div className={`bg-blue-200 rounded-t-full rounded-b-lg mx-auto transition-all duration-500 ${
                          selectedSize === "200ml" ? "w-16 h-32" :
                          selectedSize === "500ml" ? "w-20 h-40" :
                          "w-24 h-48"
                        }`}>
                          {/* Cap */}
                          <div className="w-8 h-4 bg-customsip-gold rounded-t-lg mx-auto"></div>
                          
                          {/* Label Area */}
                          {uploadedImage && (
                            <div className="absolute inset-x-2 top-8 bottom-4 rounded-lg overflow-hidden">
                              <img
                                src={uploadedImage}
                                alt="Custom label preview"
                                className="w-full h-full object-cover"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                      
                      <div className="text-center">
                        <h3 className="font-elegant text-xl font-semibold text-customsip-darkblue mb-2">
                          Your Custom Bottle
                        </h3>
                        <p className="text-customsip-gold font-semibold">{selectedSize}</p>
                        {uploadedImage && (
                          <p className="text-green-600 text-sm mt-2">✓ Custom label applied</p>
                        )}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center space-y-4">
                      <div className="text-6xl text-gray-300">🍼</div>
                      <p className="text-gray-500 text-lg">
                        Select a bottle size to see preview
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="font-elegant text-lg font-semibold text-customsip-darkblue mb-2">
              Quick Turnaround
            </h3>
            <p className="text-gray-600">Get your custom bottles in 3-5 business days</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-3xl mb-4">🎨</div>
            <h3 className="font-elegant text-lg font-semibold text-customsip-darkblue mb-2">
              High-Quality Printing
            </h3>
            <p className="text-gray-600">Vibrant colors and sharp details on every bottle</p>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-3xl mb-4">💧</div>
            <h3 className="font-elegant text-lg font-semibold text-customsip-darkblue mb-2">
              Food-Grade Safe
            </h3>
            <p className="text-gray-600">BPA-free bottles safe for drinking water</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Factory;
